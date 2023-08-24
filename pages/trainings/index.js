import Head from "next/head";
import Trainings from "../../components/trainings/Trainings.component";
import BitlioFooter from "../../components/pillars/Footer.component";
import BitlioNavbar from "../../components/pillars/Navbar.component";

const TrainingsPage = () => {
    return (
        <>
            <Head>
                <title>
                    Bitlio | Təlimlər     
                </title> 
            </Head> 

            <div id="main-container">
                <BitlioNavbar type="bitlio" /> 
                <Trainings />
                <BitlioFooter type="bitlio" />
            </div>
        </>
    )
}

export default TrainingsPage;