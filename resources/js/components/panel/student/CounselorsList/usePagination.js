import {useState} from 'react';
import {CPagination,CPaginationItem} from '@coreui/react';

const usePagination = () => {

	const [lastPage,setLastPage] = useState(1);
	const [pages,setPages] = useState([]);
	const [currentPage,setCurrentPage] = useState(1);

	const createPagination = (length,pageSize) => {
		setLastPage(Math.ceil(length / pageSize));
	}

	const changePage = (number) => {
		setCurrentPage(number);
		let newPages = [1,currentPage,currentPage-1,currentPage+1,lastPage];

		newPages = newPages.filter( (item,index) => {
			return newPages.indexOf(item) === index ||
				item > lastPage || 
				item < 1 ;
				  
		});

	}

	const PaginationComponent = () => {
		return (
			<CPagination>
				{pages.map( (idx) => {
					idx += 1;
					return(
						<>
							{idx == lastPage ? '...' : ''}
							<CPaginationItem 
							 active={idx == currentPage}
							 onClick={changePage(idx)} 
							>
							{idx}
							</CPaginationItem>
							{idx == 1 ? '...' : ''}
						</>
					)
				})}
			</CPagination>
		)
 
	}
	
	return {PaginationComponent,createPagination,currentPage};
}

export default usePagination;