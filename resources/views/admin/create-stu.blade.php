@extends('admin.admin')

@section('content')
<div class="inner-block" dir="rtl">
    <div class="col-sm-12 col-md-12 col-lg-12 mb-60">
        <div class="horizontal-tab">
            <ul class="nav nav-tabs" dir="rtl" style="text-align: right;">
                <li @click="plan_id = ''" class="active"><a href="#tab1" data-toggle="tab" aria-expanded="true">ایجاد دانش آموز</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab1">
                    <div class="col-md-4 right" style="padding-top: 10px;">
                        <div class="form-group">
                            <label class="label cat_lable">نام و نام خانوادگی</label>
                            <input type="text" class="form-control" v-model="stu_name">
                        </div>
                    </div>
                    <div class="col-md-4 right" style="padding-top: 10px;">
                        <div class="form-group">
                            <label class="label cat_lable">موبایل</label>
                            <input type="number" class="form-control" v-model="mobile">
                        </div>
                    </div>
                    <div class="col-md-4 right" style="padding-top: 10px;">
                        <div class="form-group">
                            <label class="label cat_lable">پایه</label>
                            <select class="form-control" v-model="paye_id">
                                <option value="4">هفتم</option>
                                <option value="5">هشتم</option>
                                <option value="0">نهم</option>
                                <option value="1">دهم</option>
                                <option value="2">یازدهم</option>
                                <option value="3">دوازدهم</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4 right" style="padding-top: 10px;">
                        <div class="form-group">
                            <label class="label cat_lable">رشته</label>
                            <select class="form-control" v-model="reshte_id">
                                <option value="0">ریاضی</option>
                                <option value="1">تجربی</option>
                                <option value="2">انسانی</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="col-md-4 right list_button_insert">
                        <button style="margin-top: 42px;" type="button" class="btn btn-success hvr-buzz-out" @click="add_stu()">ایجاد دانش آموز</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="clearfix"> </div>
</div>
@endsection