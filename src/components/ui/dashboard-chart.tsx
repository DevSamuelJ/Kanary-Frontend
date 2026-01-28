import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Member = {
  name: string;
  color: string;
};

// Nome dos membros do time
const members: Member[] = [
  { name: "Clark Griffin", color: "#00FFFF" },
  { name: "Octavia Blake", color: "#FF00FF" },
  { name: "Rufus Kafu", color: "#FFFF00" },
];

// Dados simulando progresso ao longo do tempo
const data = [
  {
    date: "01/09",
    "Clark Griffin": 5,
    "Octavia Blake": 3,
    "Rufus Kafu": 2,
  },
  {
    date: "05/09",
    "Clark Griffin": 8,
    "Octavia Blake": 3,
    "Rufus Kafu": 3,
  },
  {
    date: "10/09",
    "Clark Griffin": 10,
    "Octavia Blake": 7,
    "Rufus Kafu": 6,
  },
  {
    date: "15/09",
    "Clark Griffin": 14,
    "Octavia Blake": 10,
    "Rufus Kafu": 11,
  },
  {
    date: "20/09",
    "Clark Griffin": 17,
    "Octavia Blake": 13,
    "Rufus Kafu": 12,
  },
];

export function DashChart() {
  return (
    <ResponsiveContainer className="w-full h-full">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
        <XAxis dataKey="date" stroke="#ffffff80" fontSize={15} tickMargin={12} />
        <YAxis stroke="#fff" fontSize={15} tickMargin={12} />
        <Tooltip 
            contentStyle={{
                backgroundColor: "#110c1a",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "12px",
            }}
        />

        {members.map((member) => (
          <Line
            key={member.name}
            type="monotone"
            dataKey={member.name}
            stroke={member.color}
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}