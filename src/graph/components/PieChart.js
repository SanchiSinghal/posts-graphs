import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_TODOS } from '../graphql/queries';
import { COLORS } from '../../utilities/constant';

const PieCharts = () => {
  const { loading, data, error } = useQuery(GET_ALL_TODOS);
  if (loading) return <p className="default-text"> Loading...</p>;
  if (error) return <p className="default-text"> Error {error.message} </p>
  if (data) {
    var data01 = [
      {name: 'Completed', value: 7},
      {name: 'Incomplete', value: 8}
    ];
    data.allTodos.map((key) => {
      if (key.completed === true) {
        data01[0].value = data01[0].value + 1;
      } else {
        data01[1].value = data01[1].value + 1;
      }
    })
    return (
      <div className="pieChart" width="100%" height="100%">
        <p className="default-text"> Graphical Representation of complete vs incomplete task per 10000 task.</p>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
              {data01.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

export default PieCharts;
