import FooterWrapper from "../../components/FooterWrapper.tsx";
import Header from "../../components/Header.tsx";


export default function IndexPage() {
    return <FooterWrapper>
        <div className="d-flex flex-column justify-content-between" style={{height:'100vh'}}>
            <Header/>
            <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
                <h1>Heading</h1>
                <p>Hello</p>
            </div>
            <Header hidden/>
        </div>
    </FooterWrapper>;
}