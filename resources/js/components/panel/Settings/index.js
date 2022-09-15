import {useState} from 'react';
import {CNav,CNavItem,CNavLink,CTabContent,CTabPane,CCard
,CRow,CCol,CCardBody} from '@coreui/react';
import Personal from './Personal';
import {useAuthState} from '../../../Context';

const Settings = ()=>{
	
	const [activeKey,setActivekey] = useState(0);

	let Tabs = ['اطلاعات شخصی'];

	return(
		<>
			<CCard>
				<CCardBody>
					<CRow>
					<CCol>
						<CTabContent>
							<CTabPane visible={activeKey === 0}>
								<Personal />
							</CTabPane>
						</CTabContent>
					</CCol>
					<CCol className='col-md-3'>
						<CNav className='flex-column' variant="pills">
							{Tabs.map((tab,idx) =>
								<CNavItem key={idx}>
									<CNavLink
										href="javascript:void(0);"
										active={activeKey === idx}
										onClick={() => setActivekey(idx)}
									>
										{tab}
									</CNavLink>
								</CNavItem>
							)}
						</CNav>
					</CCol>
					</CRow>
				</CCardBody>
			</CCard>
		</>
	)
}
export default Settings;