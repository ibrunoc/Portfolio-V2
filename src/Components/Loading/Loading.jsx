import './Style/Loading.modules.scss';
import React from 'react';

import { Puff } from  'react-loader-spinner';

const Loading = () => {
	return(
		<>
			<section className='loadingContainer'>			
				<Puff visible={true} color="#4E68F9" radius={1} wrapperClass="myLoading" ariaLabel="puff-loading" />
			</section>
		</>		
	)
};

export default Loading;