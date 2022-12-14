
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Swal from 'sweetalert2'
import axios from 'axios';

import Vue from 'vue';
window.Vue = Vue;
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// persian date
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);

// checkeditor
import { VueEditor, Quill } from 'vue2-editor'
// import { ImageDrop } from 'quill-image-drop-module'
// import ImageResize from 'quill-image-resize-module'

// Quill.register('modules/imageDrop', ImageDrop)
// Quill.register('modules/imageResize', ImageResize)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// pdf
import html2pdf from 'html2pdf.js'

const app = new Vue({
    el: '#app',
    data: {
        isLoading: false, username: '', pass: '', logined: '', name: '', img_addr: '', message: '',
        all_stu: [], search_item: '', stu_id: '', all_exams: [],
        paye_id: '', reshte_id: '', lesson_name: '', lesson_id: '', all_lesson: [], lesson_status: 0, lesson_important: 0,
        all_mosh: [], mosh_id: '',
        plan_title: '', plan_mother: 0, plan_status: '', plan_price: '', plan_isend: 0, plan_isexam: 0, all_plan: [], plan_id: '', file_addr: '',
        num_week: '', starttime: '', endtime: '',
        mobile: '',stu_name:'',psyco_tests: [],
        content: '<h1>Initial Content</h1>',
        editorSettings: {
            modules: {
                imageDrop: true,
                imageResize: {}
            }
        },
        // customModulesForEditor: [
        //   { alias: "imageDrop", module: ImageDrop },
        //   { alias: "imageResize", module: ImageResize }
        // ]
    },
    components: {
        Loading,
        VueEditor
    },
    mounted() {
        this.getuser();
    },
    methods: {
        handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
            // An example of using FormData
            // NOTE: Your key could be different such as:
            // formData.append('file', file)

            var formData = new FormData();
            formData.append("image", file);

            axios({
                url: "https://fakeapi.yoursite.com/images",
                method: "POST",
                data: formData
            })
                .then(result => {
                    let url = result.data.url; // Get url from response
                    Editor.insertEmbed(cursorLocation, "image", url);
                    resetUploader();
                })
                .catch(err => {
                    console.log(err);
                });
        },
        login() {
            this.isLoading = true;
            axios
                .post('/admin/login', {
                    username: this.username,
                    pass: this.pass

                }).then(response => {
                    this.isLoading = false;
                    if (response.data.username != undefined) {
                        Swal.fire('', '???????? ?????????? ' + response.data.name + ' ?????? ???????? ????????', 'success');
                        location.href = "/admin/dashboard";

                    } else {
                        Swal.fire('', '?????????? ???????? ??????????', 'warning');

                    }

                }, response => {
                    this.isLoading = false;
                    Swal.fire('', '???????? ???? ?????????? ???? ????????', 'warning');
                });
        },
        getuser() {
            if (window.location.pathname == 'admin/transactions' || window.location.pathname.split('/')[2] == 'test') {
                this.logined = 1;
                return;
            }
            if (window.location.pathname != '/admin') {
                axios.get('/admin/getuser').then(response => {
                    if (response.data.username != undefined) {
                        if(window.location.pathname == '/admin/lesson')
                        {

                        }
                        if (window.location.pathname == '/admin/slider') {
                            this.get_dailies();
                            this.get_message();
                        }
                        if (window.location.pathname == '/admin/stu') {
                            this.get_all_students();
                        }
                        if (window.location.pathname == '/admin/mosh') {
                            this.get_all_counselors();
                        }
                        if (window.location.pathname == '/admin/plan') {
                            this.get_plan();
                        }
                        if (window.location.pathname == '/admin/analysises'){
                            this.get_exams();
                        }

                        this.logined = 1;
                        this.username = response.data.username
                        this.name = response.data.name
                    } else {
                        location.href = '/admin';
                        this.logined = '';
                    }
                });
            }
        },
        exit_admin() {
            this.isLoading = true;
            axios
                .get('/admin/exit_admin')
                .then(response => {
                    this.isLoading = false
                    location.href = "/admin";

                }, response => {
                    Swal.fire('', ' ?????? ???????? ????????', 'success');
                });
        },
        add_daily_message(value){
            this.isLoading = true;
            axios.post("/api/admin/dailies/newMessage",
            {
                message: value,
                counselor_id: 1
            })
            .then(function(response){
                this.isLoading = false;
                get_dailies();
            });
        },
        add_daily_picture(value){
            this.isLoading = true;
            axios.post("/api/admin/dailies/newPicture",
            { 
                file: value,
                counselor_id: 1
            })
            .then(function(response){
                this.isLoading = false;
                get_dailies();
            });

        },
        get_dailies(){
            this.isLoading = true;  
            const urlParams = new URLSearchParams(window.location.search);
            let counselor_id = urlParams.get('counselor');
            axios.get("/api/admin/dailies/"+counselor_id)
            .then(response => {
                this.isLoading = false;
                this.all_img_slider = response.data;
            });
        },
        // option
        funcaddrimg(val) {
            this.img_addr = val;
            this.get_imag_slide();
        },
        get_imag_slide() {
            this.isLoading = true;
            const urlParams = new URLSearchParams(window.location.search);
            let counselor_id = urlParams.get('counselor');
            axios
                .get('/api/admin/dailies/'+counselor_id)
                .then(response => {
                    this.isLoading = false;
                    this.all_img_slider = response.data;
                })
        },
        slider_img(id) {
            this.isLoading = true
            axios
                .post('/admin/slider_img', { id: id })
                .then(response => {
                    this.isLoading = false
                    Swal.fire('', response.data.mes, 'success');
                    this.get_imag_slide();
                })
        },
        get_message() {
            axios
                .get('/admin/get_message')
                .then(response => {
                    this.message = response.data.vlaue;
                })
        },
        edit_message() {
            this.isLoading = true
            axios
                .post('/admin/edit_message', { message: this.message })
                .then(response => {
                    this.isLoading = false
                    Swal.fire('', '???????? ?????????????????? ????', 'success');
                })
        },
        // stu
        edit_student(){
            axios.post("/api/student/update")
            .then(function(response){

            });
        },
        get_last_stu(ar = 0, mosh_id = 0) {
            if (ar) {
                this.isLoading = true
            }
            axios.post('/admin/get_stu', {
                ar: ar,
                mosh_id: mosh_id,
            })
                .then(response => {
                    this.all_stu = response.data;
                    if (ar) {
                        this.isLoading = false
                        this.mosh_id = mosh_id;
                    }
                })

        },

        get_all_counselors() {
            this.loading = true;
            axios.get('/api/admin/counselors')
            .then(response => {
                this.all_mosh = response.data;
            });
        },

        get_all_students() {
            this.isLoading = true;
            axios.get('/api/admin/students')
            .then(response => {
                this.isLoading = false;
                this.all_stu = response.data;
            });
        },
        search_stu() {
            if (this.search_item) {
                this.isLoading = true
                axios
                    .post('/admin/search_stu', {
                        name: this.search_item
                    })
                    .then(response => {
                        this.isLoading = false
                        this.all_stu = response.data;
                    })
            } else {

            }
        },
        // lesson
        add_lesson() {
            this.isLoading = true;
            this.lesson_status == true ? this.lesson_status = 1 : this.lesson_status = 0;
            this.lesson_important == true ? this.lesson_important = 1 : this.lesson_important = 0;
            axios
                .post('/admin/add_lesson', {
                    name: this.lesson_name,
                    paye_id: this.paye_id,
                    reshte_id: this.reshte_id,
                    lesson_status: this.lesson_status,
                    lesson_important: this.lesson_important,
                    id: this.lesson_id
                }).then(response => {
                    this.isLoading = false
                    this.get_lesson();
                    Swal.fire('', response.data.mes, 'success')
                })
        },
        get_lesson(a = 0) {
                this.isLoading = true;
                if(this.reshte_id == undefined)
                    this.reshte_id = 0;
                axios.get('/api/admin/lessons/'+this.paye_id+"/"+this.reshte_id)
                .then(response => {
                    this.isLoading = false;
                    this.all_lesson = response.data;
                })
        },
        edit_lesson(){
            let lesson = this.lesson;
            this.isLoading = true;
            axios.post('/api/admin/lessons/update',
                {lesson_id:lesson.id,topics:lesson.topics,title:lesson.title})
            .then(response => {
                this.isLoading = false;
                this.all_lesson = response.data;
            });
        },
        remove_lesson(){
            let lesson_id = this.lesson.id;
            axios.get("/admin/lessons/delete/"+lesson_id)
            .then(response => {
                this.get_lesson();
            });
        },
        add_topic(){
            axios.post("/admin/lessons/"+this.lesson+"/addtopic/")
            .then(function(response){

            });
        },

        edit_counselor(){

        },
        delete_counslor(){
            this.isLoading = true;
            axios.post("/admin/counselors/"+this.counselor_id+"/delete/")
            .then(response => {
                this.isLoading = false;
                this.all_mosh = this.all_mosh.filter( (counselor) => counselor.id != this.counselor_id); 
            });
        },
        get_last_mosh() {
            axios.get('/admin/get_mosh')
                .then(response => {
                    this.all_mosh = response.data;
                })

        },
        search_mosh() {
            if (this.search_item) {
                this.isLoading = true
                axios
                    .post('/admin/search_mosh', {
                        name: this.search_item
                    })
                    .then(response => {
                        this.isLoading = false
                        this.all_mosh = response.data;
                    })
            } else {
                this.get_last_mosh();
            }
        },
        unactive_mosh(id, active = 1) {
            this.isLoading = true;
            axios
                .post('/admin/unactive_mosh', { id, active })
                .then(async ({ data }) => {
                    if (data.success) {
                        await this.get_last_mosh()
                        // Swal.fire('', '???? ???????????? ?????? ????', 'success')
                    }
                    this.isLoading = false;
                    // if(response.)
                })
        },
        // planing
        funcgetaddr(val) {
            console.log(val)
            this.img_addr = val;
        },
        get_analysises_exam(){
            this.isLoading = true;
            axios.get("/admin/student/"+student_id+"/analysises/"+exam_id)
            .then(response => {
                this.isLoading = false;
                this.all_analysis = response.data;
            });
        },
        add_link(){
            axios.post("/admin/links/add",{link: this.link})
            .then(response => {

            });
        },
        get_links(){
            axios.get("/admin/links")
            .then(response => {
                this.links = response.data;
            });
        },
        add_plan() {
            if (this.plan_title) {
                this.isLoading = true
                if (this.plan_isend) {
                    var plan_isend = 1;
                    if (this.plan_isexam) {
                        var plan_isexam = 1
                    } else {
                        var plan_isexam = 0;
                    }
                } else {
                    var plan_isend = 0;
                }
                axios
                    .post('/api/admin/plans/new', {
                        title: this.plan_title,
                        parent: this.plan_mother,
                        available: this.plan_status,
                        price: this.plan_price,
                        image: this.img_addr,
                        file: this.file_addr,
                        exam_id: 1
                    }).then(response => {
                        this.isLoading = false;
                        this.get_plan();
                        Swal.fire('', response.data.mes, 'success')
                    })
            }
        },
        get_plan() {
            this.isLoading = true
            axios.get('/api/admin/plans')
                .then(response => {
                    this.all_plan = response.data;
                    this.isLoading = false;
                })
        },
        delete_plan(id) {
            this.isLoading = true;
            axios
                .post('/admin/delete_plan', { id: id })
                .then(response => {
                    this.isLoading = false;
                    this.get_plan();
                    Swal.fire('', '???? ???????????? ?????? ????', 'success')
                })
        },
        plan_edit(plan) {
            this.plan_id = plan.id;
            this.plan_title = plan.title;
            this.plan_status = plan.is_ready;
            this.plan_price = plan.price;
            this.img_addr = plan.img;
            this.plan_isend = plan.is_end;
            this.plan_isexam = plan.is_exam;
        },
        get_exams() {
            this.isLoading = true;
            axios.get("/admin/exams/"+grade+"/"+major)
            .then(response => {
                this.isLoading = false;
                this.exams = response.data;
            });
        },
        add_exam(){
            this.isLoading = true;
            axios.post("/admin/exams/new",
            {
                title: title,
                major: major,
                grade: grade
            })
            .then(response => {
                this.isLoading = false;
                this.get_exams();
            });
        },

        get_options(){
            this.isLoading = true;
            axios.get("/admin/options")
            .then(response => {
                this.isLoading = false;
                this.options = response.data;
            });
        },
        save_options(){
            this.isLoading = true;
            axios.post("/admin/options/save/",
            {
                options: options
            })
            .then(response => {
                this.isLoading = false;
                this.get_options();
            });
        },
        funcgetfile(val) {
            this.file_addr = val;
        },
        get_paln_stu(id) {
            this.isLoading = true
            axios.post('/admin/get_paln_stu', {
                stu_id: id,
            }).then(response => {
                this.isLoading = false
                this.weekly = response.data;
                this.stu_id = id;
            })
        },
        delete_stu(id) {
            Swal.fire({
                title: '???????? ???????? ?????? ????????',
                text: "???? ?????? ???????? ???????? ???????????????? ???????? ???????????? ??????????????",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: '??????',
                cancelButtonText: '??????',
              }).then((result) => {
                if (result.isConfirmed) {

                    this.isLoading = true
                    axios.post('/admin/delete_stu', {
                        stu_id: id,
                    }).then(response => {
                    this.isLoading = false
                        // this.isLoading = false
                        // Swal.fire(
                        //   '?????? ????!',
                        //   '???????? ???????? ???? ???????????? ?????? ????.',
                        //   'success'
                        // )
                        return this.get_last_stu(1);
                        
                    })
                }
              })
        },
        // pdf and chart 
        exportToPDFDashboard() {

            html2pdf(this.$refs.document, {

                margin: 0,

                filename: `chart.pdf`,

                image: {
                    type: 'jpeg',
                    quality: 0.98
                },

                enableLinks: false,

                html2canvas: {
                    scale: 1,
                    useCORS: true
                },

                jsPDF: {
                    unit: 'in',
                    format: 'tabloid',
                    orientation: 'landscape'
                }
            })


        },
        add_stu() {
            if (!this.stu_name || !this.mobile)
                return Swal.fire('', '???????? ???????? ???????? ???? ???? ?????????? ????????!!!', 'warning')
                
            if(this.mobile.length != 11 && this.mobile[0] != 0)
                return Swal.fire('', '???????? ?????????? ???????????? ???????? ??????????????', 'warning')

            this.isLoading = true,

            axios
                .post('/admin/students/new', {
                    name: this.stu_name,
                    mobile: this.mobile,
                    paye_id: this.paye_id,
                    reshte_id: this.reshte_id,
                })
                .then(response => {
                    this.isLoading = false;
                    if(!response.data.success){
                        return Swal.fire('', response.data.mesaage, 'error')
                    }
                    Swal.fire('', '???????? ???????? ???????? ?????????? ????', 'success')
                })
        }
    },
    get_tests(){
        this.isLoading = true;
        axios.get("/admin/psyco_tests")
        .then(response => {
            this.isLoading = false;
            this.psyco_tests = response.data;
        });
    },
    save_test(){
        this.isLoading = true;
        axios.post("/admin/psyco_tests/save",
        {
            
        })
        .then(response => {
            this.isLoading = false;
            get_tests();
        });
    }
});
