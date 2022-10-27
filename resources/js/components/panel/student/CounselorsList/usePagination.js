import {useState} from 'react';
import {CPagination,CPaginationItem} from '@coreui/react';

const usePagination = () => {

	const [lastPage,setLastPage] = useState(1);
	const [pages,setPages] = useState([]);
	const [currentPage,setCurrentPage] = useState(1);

	const arrangePages = (number) => {
		let newPages = [1,number,number-1,number+1,lastPage];

		newPages = newPages.filter( (item,index) => 
			newPages.indexOf(item) == index && 
			item <= lastPage &&
			item >= 1
			).sort( (a,b) => (a - b) );
		console.log(newPages);
		setPages(newPages);
	}

	const changePage = (number) => {
		arrangePages(number);
		setCurrentPage(number);
	}

	const createPagination = (length,pageSize) => {
		setLastPage(Math.ceil(length / pageSize));
		arrangePages(1);
	}

	const PaginationComponent = () => {
		return (
			<CPagination>
				{pages.map( (idx) => 
						<>
							{idx == lastPage && (lastPage - currentPage) > 2 ? 
								<CPaginationItem>
									...
								</CPaginationItem> 
								: 
								<div></div>
							}
							<CPaginationItem 
							 active={idx == currentPage}
							 onClick={() => changePage(idx)} 
							>
							{idx}
							</CPaginationItem>
							{idx == 1 && currentPage > 3 ? 
								<CPaginationItem>
									...
								</CPaginationItem> 
								: 
								<div></div>
							}
						</>
					
				)}
			</CPagination>
		)
 
	}
	
	return {PaginationComponent,createPagination,currentPage};
}

export default usePagination;