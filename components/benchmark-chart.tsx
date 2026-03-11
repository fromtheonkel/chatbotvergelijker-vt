"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const benchmarkData = [
  {
    periode: "Mar 2023",
    frontier: 86.4,
    openSource: 63.9,
    frontierLabel: "GPT-4",
    openSourceLabel: "LLaMA 65B",
  },
  {
    periode: "Jul 2023",
    frontier: 86.4,
    openSource: 68.9,
    frontierLabel: "GPT-4",
    openSourceLabel: "Llama 2 70B",
  },
  {
    periode: "Dec 2023",
    frontier: 86.4,
    openSource: 70.6,
    frontierLabel: "GPT-4",
    openSourceLabel: "Mixtral 8x7B",
  },
  {
    periode: "Apr 2024",
    frontier: 86.5,
    openSource: 82.0,
    frontierLabel: "GPT-4 Turbo",
    openSourceLabel: "Llama 3 70B",
  },
  {
    periode: "Jul 2024",
    frontier: 88.7,
    openSource: 87.3,
    frontierLabel: "GPT-4o",
    openSourceLabel: "Llama 3.1 405B",
  },
  {
    periode: "Dec 2024",
    frontier: 88.7,
    openSource: 88.5,
    frontierLabel: "GPT-4o",
    openSourceLabel: "DeepSeek V3",
  },
  {
    periode: "Jan 2025",
    frontier: 91.8,
    openSource: 90.8,
    frontierLabel: "o1 (OpenAI)",
    openSourceLabel: "DeepSeek R1",
  },
]

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{
    value: number
    dataKey: string
    payload: (typeof benchmarkData)[0]
  }>
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm">
      <p className="font-semibold text-dark mb-1">{label}</p>
      {payload.map((entry) => {
        const isFrontier = entry.dataKey === "frontier"
        const modelLabel = isFrontier
          ? entry.payload.frontierLabel
          : entry.payload.openSourceLabel
        return (
          <p key={entry.dataKey} style={{ color: isFrontier ? "#e74c3c" : "#2ecc71" }}>
            {modelLabel}: {entry.value}%
          </p>
        )
      })}
    </div>
  )
}

export function BenchmarkChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={benchmarkData}
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="periode"
            tick={{ fontSize: 12, fill: "#636e72" }}
            tickMargin={8}
          />
          <YAxis
            domain={[50, 95]}
            tick={{ fontSize: 12, fill: "#636e72" }}
            tickFormatter={(v: number) => `${v}%`}
            tickMargin={4}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: 14, paddingTop: 12 }}
          />
          <Line
            type="monotone"
            dataKey="frontier"
            name="Gesloten modellen"
            stroke="#e74c3c"
            strokeWidth={2.5}
            dot={{ r: 5, fill: "#e74c3c" }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="openSource"
            name="Open source modellen"
            stroke="#2ecc71"
            strokeWidth={2.5}
            dot={{ r: 5, fill: "#2ecc71" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-center text-muted-foreground mt-2">
        MMLU benchmark scores van topmodellen per categorie (2023–2025)
      </p>
    </div>
  )
}
