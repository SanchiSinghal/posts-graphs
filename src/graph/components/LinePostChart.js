import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from '../graphql/queries';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';
import { Dropdown } from 'semantic-ui-react'
import { groupBy } from 'lodash';
import { monthsDropdown, months, days } from '../../utilities/constant';
import { useState } from "react";


const LinePostChart = () => {
    const {loading, data, error} = useQuery(GET_ALL_POSTS);
    const [monthState, setMonthState] = useState("");

    if (loading) return <p className="default-text"> Loading...</p>;
    if (error) return <p className="default-text"> Error {error.message} </p>
    if (data) {
      const getMonthCount = item => {
        const month = item && item.createdAt && moment(parseInt(item.createdAt)).format('MMM');
        return month;
      }
      const getDaysCount = item => {
        const day = item && item.createdAt && moment(parseInt(item.createdAt)).format('DD');
        return day;
      }
      const result = groupBy(data.allPosts, getMonthCount);
      const daysResult = monthState && groupBy(result[monthState], getDaysCount);
      var postData = [];
      months.map((key) => (
        postData.push({
          key,
          'count': result[key] ? result[key].length : 0
        })
      ));
      if (monthState) {
        postData = [];
        monthState && days.map((key) => {
          return postData.push({
            key,
            'count': daysResult[key] ? daysResult[key].length : 0
          })
        });
      }

      return (
        <div className="home">
          <p className="default-text"> Graphical Representation of posts created per 10000 entries month wise with day count.</p>
          <LineChart
            width={1000}
            height={500}
            data={postData}
            margin={{
              top: 50,
              right: 100,
              left: 200,
              bottom: 50
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="key" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
        </LineChart>
        <div>
          <Dropdown
            placeholder='Select Month'
            fluid
            selection
            onChange={(e, data) => setMonthState(data.value)}
            options={monthsDropdown}
            className='ui dropdown search'
          />
        </div>
        </div>
      );
    }
}

export default LinePostChart;
