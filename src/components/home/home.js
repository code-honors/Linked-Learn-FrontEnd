import React, { useEffect, useState } from "react";
import { If, Then, Else } from "react-if"
import { useSelector } from "react-redux";
import Main from "../main/main";
import About from "../about/about";
import Contact from "../contact/contact";
import { useHistory } from "react-router-dom";
import Auth from "../sign/index";
import "./home.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import ReactPageScroller from "react-page-scroller";

function Home(props) {
	//react-page-scroller
	let [flag, setFlag] = useState(true);
	let history = useHistory();
	const [page, setPage] = useState(0);

	const handlePage = (page) => {
		setPage(page);
	};

	const state = useSelector((state) => {
		return {
			user: state.signIn.user,
			loggedIn: state.signIn.loggedIn,
		};
	});

	// console.log(state.user);
	// console.log(state.loggedIn)
	useEffect(() => {
		setTimeout(() => {
			setFlag(false)
		}, 300)
	}, [])

	const handleUnavailable = (e) => {
		console.log(e);
	};

	useEffect(() => {
		console.log('home page', state.loggedIn);
		if (state.loggedIn) {

			history.push("/dashboard");

		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.loggedIn])
	// end of react-page-scroller

	return (
		<>
			<If condition={!flag}>
				<Then>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
					>

						<ReactPageScroller
							pageOnChange={handlePage}
							containerWidth={window.innerWidth * 1}
							containerHeight={window.innerHeight * 1}
							customPageNumber={page}
							onBeforePageScroll={(e) => handleUnavailable(e)}
						>
							<Main />
							<About />
							<Contact />
							<Auth />
						</ReactPageScroller>
					</div>
				</Then>
				<Else>
					loading
            </Else>
			</If>
			{/* /* react-page-scroller */}



		</>
	);
}

export default Home;
