"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export default function SkillRadarChart() {
  const data = [
    { subject: "React", A: 90, fullMark: 100 },
    { subject: "Next.js", A: 85, fullMark: 100 },
    { subject: "JavaScript", A: 80, fullMark: 100 },
    { subject: "Node.js", A: 70, fullMark: 100 },
    { subject: "Tailwind", A: 75, fullMark: 100 },
    { subject: "MongoDB", A: 65, fullMark: 100 },
  ];

  return (
   
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={data}
          >
            {/* 🟢 GRID FILL */}
            <PolarGrid
              gridType="polygon"
              stroke="rgba(0,255,128,0.4)"
              fill="rgba(0,255,128,0.05)"  // subtle grid fill color
              fillOpacity={0.4}
            />

            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "oklch(70.5% 0.213 47.604)", fontSize: 12 ,style:{fontFamily:"var(--font-mono)"} }}
            />

            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              stroke="rgba(255,255,255,0.2)"
              tick={false}
            />

            {/* 🔵 RADAR FILL */}
            <Radar
              name="Skill Level"
              dataKey="A"
              stroke="#00ffff"
              fill="#00ffff"
              fillOpacity={0.4}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0a0a0a",
                // border: "1px solid #00ffff", 
                color: "#00ffff",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#00ffff" }}
              labelStyle={{ color: "#00ffff" }}
              cursor={{
                stroke: "#00ffff",
                strokeWidth: 2,
              }}
            />
          </RadarChart>
        </ResponsiveContainer>

    
  );
}
