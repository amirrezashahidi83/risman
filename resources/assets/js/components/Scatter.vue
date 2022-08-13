<script>
import {Scatter, mixins} from 'vue-chartjs'

export default {
    extends: Scatter,
    props: ['optionschart_dar_hale_tahsil'],
    mounted() {
        this.$emit('get_optionschart')
    },
    methods: {
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        },
        randomScalingFactor() {
            return Math.round(Math.random() * 200) - 100;
        },

        setOption(x, y) {


            this.renderChart({
                    datasets: [{
                        label: '',
                        borderColor: '#fff',
                        backgroundColor: [
                            '#fff',
                        ],
                        pointRadius: 5,
                        pointBackgroundColor: 'red',
                        data: [{
                            x: x,
                            y: y,
                        }/*, {
                            x: this.randomScalingFactor(),
                            y: this.randomScalingFactor(),
                        }, {
                            x: this.randomScalingFactor(),
                            y: this.randomScalingFactor(),
                        }, {
                            x: this.randomScalingFactor(),
                            y: this.randomScalingFactor(),
                        }, {
                            x: this.randomScalingFactor(),
                            y: this.randomScalingFactor(),
                        }, {
                            x: this.randomScalingFactor(),
                            y: this.randomScalingFactor(),
                        }, {
                            x: this.randomScalingFactor(),
                            y: this.randomScalingFactor(),
                        }*/]
                    }],

                },
                {

                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            ticks: {
                                min: -200,
                                max: 200,
                                stepSize: 50,
                                reverse: false,
                                beginAtZero: true
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                min: -200,
                                max: 200,
                                stepSize: 50,
                                reverse: false,
                                beginAtZero: true
                            }
                        }]
                    },
                    pieceLabel: {
                        render: '',
                        precision: 1
                    },
                    showAllTooltips: false,
                    title: {
                        display: false,
                        text: '',
                        fontFamily: 'Shabnam',
                        fontColor: '#FFA117',
                    },

                    legend: {
                        labels: {
                            render: 'percentage',
                            precision: 2,
                            fontColor: '#fff',
                            fontSize: 80,
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
                /*     height: 180,
                     width: "100%",
                     legend: {
                         fontSize: "200px"
                     },*/
            }
        }
    }

}
</script>

<style>
canvas {
    background-image: url("../../../../public/img/backChart.jpg");
    background-repeat: no-repeat;
    background-position:center bottom;
    background-size: contain;

}

</style>
