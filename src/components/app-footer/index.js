import React, { memo } from 'react'

import {
	footerInfo
} from '@/common/local-data';

import {
	AppFooterWrapper,
	FooterLeft,
	FooterRight
} from './style';

export default memo(function AppFooter() {
	return (
		<AppFooterWrapper>
			<div className="content wrap-v2">
				<FooterLeft>
					<div className="link">
						{
							footerInfo.protocols.map(v => {
								return (
									<span key={v.title}>
										<a className="item" href={v.link} target="_blank" rel="noopener noreferrer">{v.title}</a>
										<span className="line">|</span>
									</span>
								)
							})
						}
					</div>
					<p className="info">
						<span className="mr">{footerInfo.belong}</span>
						<span>{footerInfo.licence.prefix}</span>
						<a href={footerInfo.licence.link} target="_blank" rel="noopener noreferrer">{footerInfo.licence.title}</a>
					</p>
					<p className="info">
						<span className="mr">{footerInfo.report.phone.prefix + footerInfo.report.phone.num}</span>
						<span>{footerInfo.report.email.prefix}</span>
						<a href={"mailto:" + footerInfo.report.email.email}>{footerInfo.report.email.email}</a>
					</p>
					<p className="info">
						<span className="mr">{footerInfo.icp.gd}</span>
						<a className="mr" href={footerInfo.icp.gl.link} target="_blank" rel="noopener noreferrer">{footerInfo.icp.gl.title}</a>
						<a href={footerInfo.icp.zj.link} target="_blank" rel="noopener noreferrer">
							<span className="police-logo logo"></span>
							<span>{footerInfo.icp.zj.title}</span>
						</a>
					</p>
				</FooterLeft>
				<FooterRight>
					<ul className="enter">
						{
							footerInfo.imgBtns.map((v,i) => {
								let mg = "";
								if(i === 0) mg = " no-margin"
								return (
									<li key={v.link} className={'item' + mg}>
										<a href={v.link} className={'foot-enter-new logo-' + v.img} target="_blank" rel="noopener noreferrer"> </a>
										<span className={'foot-enter-tt tt tt-'+v.img}></span>
									</li>
								)
							})
						}
					</ul>
				</FooterRight>
			</div>
		</AppFooterWrapper>
	)
})
