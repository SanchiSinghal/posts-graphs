import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from '../graphql/queries';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { groupBy } from 'lodash';

const BarGraph = () => {
    const {loading, data, error} = useQuery(GET_ALL_POSTS);

    if (loading) return <p> Loading...</p>;
    if (error) return <p> Error ${error.message} </p>
    if (data) {
      const getUserCount = item => {
        const id = item && item.author && item.author.id;
        return id;
      }
      const result = groupBy(data.allPosts, getUserCount);
      var postData = [];
      Object.keys(result).map((key) => (
        postData.push({
          name: result[key][0].author.firstName,
          count: result[key].length
        })
      ));

      postData.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));

      return (
        <div className="barGraph">
        <title> Graphical Representation of no. of posts created by user per 10000 post entries.</title>
        <BarChart
          width={500}
          height={300}
          data={postData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
        </div>
      );
    }
}

export default BarGraph;
