'use client';

import React from 'react';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, TimeScale);

interface CryptoChartProps {
    prices: [number, number][];
}

export const CryptoChart: React.FC<CryptoChartProps> = ({ prices }) => {
    const chartData = {
        labels: prices.map(([timestamp]) => new Date(timestamp)),
        datasets: [
            {
                label: 'Price (USD)',
                data: prices.map(([, price]) => price),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                pointRadius: 2,
                pointHoverRadius: 5,
                tension: 0.3,
            },
        ],
    };

    const formatPrice = (value: number) => {
        return `$${parseFloat(value.toFixed(2))}`;
    };

    const chartOptions: ChartOptions<'line'> = {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'hour',
                    tooltipFormat: 'HH:mm',
                    displayFormats: {
                        hour: 'HH:mm',
                    },
                },
                title: {
                    display: true,
                    text: 'Time',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                position: 'right',
                ticks: {
                    callback: (value: string | number) => {
                        const val = typeof value === 'number' ? value : parseFloat(value);
                        return formatPrice(val);
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: context => {
                        const val = context.parsed.y;
                        return `Price: ${formatPrice(val)}`;
                    },
                },
            },
        },
    };

    return <Line data={chartData} options={chartOptions} />;
};
