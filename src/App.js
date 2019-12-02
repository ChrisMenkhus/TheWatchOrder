import React from 'react';

import {ParallaxBackground, Button, H1, Img, Navbar, NavItems, NavItem, P, SmallContainer, ScrollContainer, Wrapper } from './components'

import Timeline from './containers/Timeline'


import listicon from './assets/listicon.png'

import {Phase1, Phase2, Phase3, Phase4, Phase5} from './data/Phases.js'

import Card from './containers/Card'

import logos from './assets/logos.js'

import bg1 from './assets/bgimg2.jpg'
import bg2 from './assets/phase2bg.png'
import bg3 from './assets/phase3bg.png'
import bg4 from './assets/phase4bg.png'
import bg5 from './assets/phase5bg.jpeg'

import arrowup from './assets/arrowup.png'
import menunav from './assets/menunav.png'

import marveledition from './assets/marveledition.png'
let phaseText = ' \n \n P \n H \n A \n S \n E \xa0 \n \n O \n N \n E \n \n \n '
let phaseText2 = ' \n \n P \n H \n A \n S \n E \xa0 \n \n T \n W \n O \n \n \n '
let phaseText3 = ' \n \n P \n H \n A \n S \n E \xa0 \n \n T \n H \n R \n E \n E \n '
let phaseText4 = ' \n \n P \n H \n A \n S \n E \xa0 \n \n F \n O \n U \n R \n \n '
let phaseText5 = ' \n \n P \n H \n A \n S \n E \xa0 \n \n F \n I \n V \n E \n \n '






class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navbarEnabled: false};

		this.navbarRef = React.createRef();
	};

	toggleNavbar() {
		console.log('lol')
		this.setState({ navbarEnabled: !this.state.navbarEnabled })
	};

	closeNavbar() {
		this.setState({ navbarEnabled: false })
	}

	componentDidMount() {

	}

	render() {
		const phase1Cards = Phase1.map((user, i) => {
		return <Card name={user.name} release={user.release} logo={logos[0][i]}/>;
		})

		const phase2Cards = Phase2.map((user, i) => {
		return <Card name={user.name} release={user.release} logo={logos[1][i]}/>;
		})

		const phase3Cards = Phase3.map((user, i) => {
		return <Card name={user.name} release={user.release} logo={logos[2][i]}/>;
		})

		const phase4Cards = Phase4.map((user, i) => {
		return <Card name={user.name} release={user.release} logo={logos[3][i]}/>;
		})

		const phase5Cards = Phase5.map((user, i) => {
		return <Card name={user.name} release={user.release} logo={logos[4][i]}/>;
		})
	

	return(
		<Wrapper>				
			<Navbar position='fixed' 
				width={this.state.navbarEnabled ? '100vw' : '0px'} 
				height='100vh' 
				background='black'>
				
				<NavItems ref={this.navbarRef} display={this.state.navbarEnabled ? 'flex' : 'none'} justify='left'>
					<H1 big padding='50px 0px 0px 0px'>THE WATCH ORDER</H1>
					<Img src={marveledition} width='80%' marginleft='50px'/>
					<NavItem href='#phase1' onClick={ () => {this.toggleNavbar()} } ><H1>Phase 1</H1></NavItem>
					<NavItem href='#phase2' onClick={ () => {this.toggleNavbar()} } ><H1>Phase 2</H1></NavItem>
					
					<NavItem href='#phase3' onClick={ () => {this.toggleNavbar()} } ><H1>Phase 3</H1></NavItem>
					<NavItem href='#phase4' onClick={ () => {this.toggleNavbar()} } ><H1>Phase 4</H1></NavItem>
					<NavItem href='#phase5' onClick={ () => {this.toggleNavbar()} } ><H1>Phase 5+</H1></NavItem>
					<br/><br/>

					<P>contact @ menkhus.chris@gmail.com</P>
					<P>
					<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"/><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>
					</P>
				</NavItems>
			</Navbar>
			
			{/*Body Container*/}	
			<SmallContainer marginleft={this.state.navbarEnabled ? 'auto' : 'auto'} marginright='-10px'>
				
				<div id='phase1' />
				<ParallaxBackground src={bg1} height='40vh' width='100%'></ParallaxBackground>

				<Timeline phasetext={phaseText}>
					{phase1Cards}
				</Timeline>
				
				<ParallaxBackground src={bg2} height='40vh' width='100%'></ParallaxBackground>

				<div id='phase2' />
				<Timeline phasetext={phaseText2}>
					{phase2Cards}
				</Timeline>
				
				<ParallaxBackground src={bg3} height='40vh' width='100%'></ParallaxBackground>

				<div id='phase3' />
				<Timeline id='phase3' phasetext={phaseText3}>
					{phase3Cards}
				</Timeline>

				<ParallaxBackground src={bg4} height='40vh' width='100%'></ParallaxBackground>

				<div id='phase4' />
				<Timeline phasetext={phaseText4}>
					{phase4Cards}
				</Timeline>

				<ParallaxBackground src={bg5} height='40vh' width='100%'></ParallaxBackground>

				<div id='phase5' />
				<Timeline phasetext={phaseText5}>
					{phase5Cards}
				</Timeline>


			</SmallContainer>

				<SmallContainer height='48px' width='100vw' position='fixed' zindex='2'
					margintop='95vh' >
					<SmallContainer marginleft='auto' marginright='auto' width='100px' background=''>
						<a href='#phase1'>
							<img src={arrowup} alt='back to top'/>
						</a>
					</SmallContainer>
				</SmallContainer>

				<SmallContainer height='60px' width='44px' position='fixed' zindex='55'
					marginleft='1vw' margintop='15px' marginright='auto'>
					<a onClick={ () => { this.toggleNavbar() } } >
						<img src={menunav} alt='nav button'/>
					</a>
				</SmallContainer>
			
		</Wrapper>
	);
	}
}

export default App;
