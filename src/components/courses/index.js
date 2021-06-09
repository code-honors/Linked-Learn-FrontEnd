import Courses from "./all";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function AllCourses() {
	return (
		<>
			<Navbar />
			<div style={{marginLeft:"16.5%"}}>
				<Courses />
			</div>
			<Footer />
		</>
	);
}

export default AllCourses;
