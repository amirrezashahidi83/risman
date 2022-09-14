import {Radar} from 'vue-chartjs'

export default {
    extends: Radar,
    props: ['optionschart_dar_hale_tahsil'],
    mounted() {
        this.$emit('get_optionschart')
    },
    methods: {
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        },

        setOption(chartLabel, chartData) {


            this.renderChart({

                    labels: chartLabel,
                    datasets: [

                        {
                            label: '',
                            backgroundColor: ['#f87979', '#00d8ff', '#35b982', '#e7664d', 'yellow', 'blue', 'green', '#337DFF', '#E133FF', '#DAFF33', '#33FFA5', '#FF3362', '#2DA1AA', '#63AA2D', '#AA452D', '#2D54AA', '#BB61D4', '#D49C61', '#5A4E42', '#E5A409', '#E50909', '#0980E5', '#1C3448'],
                            data: chartData,
                            borderColor: '#fff',

                        },
                    ],
                    title: {
                        display: true,
                        text: 'وضعیت نظام وظیفه',
                        fontFamily: 'Shabnam',
                        fontColor: '#FFA117',
                    },

                },
                {
                    responsive: true,
                    maintainAspectRatio: false,
                    scale: {
                        pointLabels: {
                            fontSize: 30,
                            fontFamily: "aviny",
                        }
                    },

                    title: {
                        display: true,
                        text: '',
                        fontFamily: 'Shabnam',
                        fontColor: '#FFA117',
                    },

                    legend: {
                        labels: {
                            render: 'percentage',
                            precision: 1,
                            fontColor: '#fff',
                            fontSize: 30,
                            fontFamily: 'alisans',
                        },

                    },

                    plugins: {
                        datalabels: {
                            formatter: (value, ctx) => {
                                let datasets = ctx.chart.data.datasets;
                                if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                                    let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                                    let percentage = Math.round((value / sum) * 100)
                                    if (percentage != 0) {
                                        return percentage = Math.round((value / sum) * 100) + '%';
                                    }

                                } else {
                                    return percentage;
                                }
                            },
                            color: '#000',
                        }
                    }


                }
            )

        }
    },
    data() {
        return {
            options: {
                 height: 200,
                 width: "100%",
                 legend: {
                     fontSize: "100px"
                 },
            }
        }
    }

}
