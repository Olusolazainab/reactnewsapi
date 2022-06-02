import { useState, useEffect } from 'react';
import News from './News';

const NewsData = () => {
	const [container, setContainer] = useState([]);
	const [category, setCategory] = useState('');
	const [page, setPage] = useState(1);
	const [isFetching, setIsFetching] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	const fetchData = (API) => {
		fetch(API)
			.then(res => {
				if (!res.ok) {
					throw Error('could not fetch the data for that resource')
				}
				return res.json();
			})
			.then(data => {
				setContainer(data.results);
				setIsLoading(false);
			})
			.catch(err => {
				setError(err.message);
			});
	};

	const moreData = () => {
		console.log(page);
		let url = `${process.env.REACT_APP_NEWSURL}?apikey=${process.env.REACT_APP_NEWSKEY}&language=en&category=science&page=${page}`;
		fetch(url)
			.then((res) => {
				return res.json().then((data) => {
					setContainer([...container, ...data.results]);
					setPage(page + 1);
					setIsFetching(false);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
			document.documentElement.offsetHeight
		) {
			return;
		}
		setIsFetching(true);
	};

	useEffect(() => {
		fetchData(
			`${process.env.REACT_APP_NEWSURL}?apikey=${process.env.REACT_APP_NEWSKEY}&language=en&category=sports`
		);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (isFetching) {
			moreData();
		}
	}, [isFetching]);

	const handleChange = (e) => {
		setCategory(e.target.value);
	};
	useEffect(() => {
		fetchData(
			`${process.env.REACT_APP_NEWSURL}?apikey=${process.env.REACT_APP_NEWSKEY}&language=en&category=+${category}`
		);
	}, [category]);

	return (
		<>
			<div className='row'>
				<div className='col-sm-12 col-md-3 col-lg-4'></div>
				<div className='text-center mt-5 pt-5 col-sm-12 col-md-6 col-lg-4'>
					<form className=''>
						<div>
							<label>filter by catrgory:</label>
						</div>
						<select
							className='mt-2 form-control select-1'
							onChange={handleChange}>
							<option></option>
							<option value='busuness'>bussiness</option>
							<option value='entertainment'>entertainment</option>
							<option value='environment'>environment</option>
							<option value='food'>food</option>
							<option value='health'>health</option>
							<option value='politics'>politics</option>
							<option value='science'>science</option>
							<option value='sports'>sports</option>
							<option value='technology'>technology</option>
							<option value='top'>top</option>
							<option value='world'>world</option>
						</select>
					</form>
				</div>
				<div className='col-sm-12 col-md-3 col-lg-4'></div>
			</div>

			<div className='container container-1 mt-5 pt-2'>
			
				<div className='text-center'>
					{isLoading && (
						<div className='spinner-border' role='status'>
							<span className='visually-hidden'>Loading...</span>
						</div>
					)}
				{error && <div>{error}</div>}
				</div>
				<div className='row'>
				
					{container.map((item, index) => {
						return <News key={index} item={item} />;
					})}
				</div>
			</div>
			<div className='text-center'>
				{isFetching && (
					<div className='spinner-border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				)}
			</div>
		</>
	);
};

export default NewsData;
