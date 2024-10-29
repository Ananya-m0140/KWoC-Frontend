import { useEffect, useState } from 'react'
import ListItem from '../components/ListItem'
import DetailsViewer from '../components/DetailsViewer'
import { Project } from '../types'
import testData from '../testData.json'
import { PAGENATION_LEN } from '../constants'

function OrgDash() {
	const [allData, setAllData] = useState<Project[]>([]);
	const [filterData, setFilterData] = useState<Project[]>([]);
	const [currPage, setCurrPage] = useState<Project[]>([]);
	const [pgNo, setPgNo] = useState<number>(1);

	const [selItem, setSelItem] = useState<Project>({} as Project);

	useEffect(() => {
		setAllData(testData as Project[]);
		setFilterData(allData);
	}, []);

	useEffect(() => {
		const startidx = (pgNo - 1) * PAGENATION_LEN;
		const endidx = Math.min(startidx + PAGENATION_LEN, filterData.length);
		setCurrPage(filterData.slice(startidx, endidx));
	}, [pgNo]);

	const showAll = () => {
		setFilterData(allData);
	}

	const showAccept = () => {
		setFilterData(allData.filter((item) => item.isProjectActive))
	}

	const showReject = () => {
		setFilterData(allData.filter((item) => !item.isProjectActive))
	}

	const nextPage = () => {
		if(pgNo <= filterData.length / PAGENATION_LEN) setPgNo(pgNo + 1);
	}

	const prevPage = () => {
		if(pgNo >= 2) setPgNo(pgNo - 1);
	}
	return (
		<div>
			<div className="org-dash-left">
				<div className="org-dash-type-btn">
					<div className="btn-all">
						<button onClick={() => showAll()}>All</button>
					</div>
					<div className="btn-accept">
						<button onClick={() => showAccept()}>Accepted</button>
					</div>
					<div className="btn-rej">
						<button onClick={() => showReject()}>Rejected</button>
					</div>
				</div>
				<div className="org-dash-view">
					<div className="org-dash-table">
						{currPage.map((value, idx) => (
							<div>
								<ListItem item={value}/>
								{idx + 1}
							</div>
						))}
					</div>
					<div className="org-dash-table-nav">
						<button className='org-dash-table-back' onClick={() => prevPage()}>&lt;</button>
						<div className="org-dash-table-info">
							Showing {(pgNo - 1) * PAGENATION_LEN + 1} - {pgNo * PAGENATION_LEN} of {filterData.length}
						</div>
						<button className='org-dash-table-next' onClick={() => nextPage()}>&gt;</button>
					</div>
				</div>
			</div>
			<div className="org-dash-right">
				<DetailsViewer item={selItem}/>
			</div>
		</div>
  	)
}

export default OrgDash