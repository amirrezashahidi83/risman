import {useState} from 'react';

export const compareType = (data) => {
	var general_sum = 0;
	var special_sum = 0;

	data.forEach( (lesson) => {
		if(lesson.type == 1)
			general_sum += lesson.study_time;
		else{
			special_sum += lesson.study_time;
		}
	});

	return [
		{
			y: general_sum,
			label: 'دروس عمومی'
		},
		{
			y: special_sum,
			label: 'دروس اختصاصی'
		}
	];

}

export const compareLessons = (data,type) => {
	var points = [];

	data.filter((lesson) => lesson.type == type).
		forEach( (lesson) => {
			points.push({

				y: lesson.sum_study,
				label: lesson.title
			});
	});

	return points;
}

export const compareSum = (data,type) => {
	var sum_study = 0;
	var sum_test_time = 0;

	data.filter( (lesson) => lesson.type == type )
		.forEach( (lesson) => {
			sum_study += lesson.sum_study;
			sum_test_time += lesson.test_time;
	});

	return [
		{
			y: sum_study,
			label: 'مطالعه'
		},
		{
			y: sum_test_time,
			label: 'تست '
		}
	];
}

export const compareDetails = (lesson) => {
	return [
		{
			y: lesson.pre_study,
			label: 'مطالعه سطحی یا پیش مطالعه'
		},
		{
			y: lesson.deep_study,
			label: 'مطالعه عمیق'
		},
		{
			y: lesson.practice,
			label: 'حل تمرین'
		},
		{
			y: lesson.summary,
			label: 'خلاصه برداری'
		},
		{
			y: lesson.review,
			label: 'خلاصه خوانی یا مرور'
		},
		{
			y: lesson.learning_test,
			label: 'تست آموزشی و سنجشی'
		},
		{
			y: lesson.tutorial,
			label: 'فیلم آموزشی'
		}
	];
}

export const compareWeeks = (week1,week2) => {
	
	var weeks = [week1,week2];
	var sum_study = [0,0];
	
	for(let i = 0; i<2; i++)
		week[i].forEach( (lesson) => {
			sum_study[i] += lesson.sum_study;
		});

	return [
		{y: sum_study[0]},
		{y:sum_study[1]}
	];


}