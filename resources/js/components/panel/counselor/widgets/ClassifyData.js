import {useState} from 'react';

export const compareType = (data) => {
	
	var general_sum = 0;
	var special_sum = 100;

	data.forEach( (day) => {
		let plan = JSON.parse(day.data);
		Object.entries(plan).forEach( (lesson) => {
			if(lesson.type == 1)
				general_sum += lesson["study_time"];
			else{
				special_sum += lesson["study_time"];
			}
		});
	});

	return [
		{
			value: general_sum,
			name: 'دروس عمومی'
		},
		{
			value: special_sum,
			name: 'دروس اختصاصی'
		}
	];

}

export const compareLessons = (data,type) => {
	let sum_lessons = {};
	var points = [];

	data.forEach( (day) => {

		let plan = JSON.parse(day.data);
		Object.entries(plan).forEach( (lesson) => {
			let lesson_name = lesson['title'];
			if(!Object.keys(sum_lessons).includes(lesson_name))
				sum_lessons[lesson_name] = {};
				sum_lessons[lesson_name]['study_time'] += lesson['study_time'];
		});
	});

	Object.keys(sum_lessons).forEach( (lesson_name) => {
		points.push(
			{
				name: lesson_name,
				value: sum_lessons[lesson_name]['study_time']
			}
		);
	});
	console.log(points);
	return points;
}

export const compareSum = (data,type) => {

	var sum_study = 0;
	var sum_test_time = 0;
	
	data.forEach((day) => {

		let plan = JSON.parse(day.data);
		Object.entries(plan).forEach( (lesson) => {

			sum_study += lesson['study_time'];
			sum_test_time += lesson['test_time'];
		});
	});
	console.log(sum_study);
	return [
		{
			value: sum_study,
			name: 'مطالعه'
		},
		{
			value: sum_test_time,
			name: 'تست '
		}
	];
}

export const compareDetails = (data,lesson_id) => {
	
	let sum_lesson = {
		'pre_study': 0,
		'deep_study': 0,
		'practice': 0,
		'summary': 0,
		'review': 0,
		'learning_test': 0,
		'tutorial': 0
	};
	
	data.forEach( (day) => 
	{
		let plan = JSON.parse(day.data);

		if(Object.keys(plan).includes(lesson_id)){
			sum_lesson['pre_study'] += plan[lesson_id].sum_study;
			sum_lesson['deep_study'] += plan[lesson_id].deep_study;
			sum_lesson['practice'] += plan[lesson_id].practice;
			sum_lesson['summary'] += plan[lesson_id].summary;
			sum_lesson['review'] += plan[lesson_id].review;
			sum_lesson['learning_test'] += plan[lesson_id].learning_test;
			sum_lesson['tutorial'] += plan[lesson_id].tutorial;
		}
	});

	return [
		{
			value: sum_lesson["pre_study"],
			name: 'مطالعه سطحی یا پیش مطالعه'
		},
		{
			value: sum_lesson["deep_study"],
			name: 'مطالعه عمیق'
		},
		{
			value: sum_lesson["practice"],
			name: 'حل تمرین'
		},
		{
			value: sum_lesson["summary"],
			name: 'خلاصه برداری'
		},
		{
			value: sum_lesson["review"],
			name: 'خلاصه خوانی یا مرور'
		},
		{
			value: sum_lesson["learning_test"],
			name: 'تست آموزشی و سنجشی'
		},
		{
			value: sum_lesson["tutorial"],
			name: 'فیلم آموزشی'
		}
	];
}

export const compareWeeks = (weeks) => {
	
	var sum_study = [];
	let points = [];

	for(let index = 0; index < weeks.length; index++)
		weeks[index].forEach( (day) => {
			let plan = JSON.parse(day.data);
			Object.entries(plan).forEach( (lesson) => {
				if(sum_study.length < index)
					sum_study.push(0);

				sum_study[index] += lesson['sum_study'];
			});
		});

	for(let index = 0;index < sum_study.length; index++){
		points.push({
			uv: sum_study[index]
		});
	}

	return points;

}