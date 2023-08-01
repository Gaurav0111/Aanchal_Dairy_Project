import main from '../assets/images/factory.svg'
import Wrapper from '../assets/css/landingPage'
import { Logo } from '../components/index'

const Landing = () => {
    return <Wrapper>
        <nav className='navBar' >
            <div className='division_1' >
                <Logo />
                <h1 className='factoryName' href='/' >Aanchal Dairy</h1>
            </div>
            <a className='loginTag' href='/' > Register/Login </a>
        </nav>
        <h1 className='heading1' >Aanchal <span> Dairy </span> Products</h1>
        <section className='container_1' >
            <div className='landingpagecontent' >
                <p>Welcome to Aanchal Dairy Products!</p>
                <p>At Aanchal Dairy, we are dedicated to delivering the finest quality dairy products to your doorstep. Our mission is to provide our customers with wholesome, fresh, and nutritious products that are not only delicious but also contribute to a healthy lifestyle.</p>
                <p>From our farm to your table, we prioritize hygiene and quality at every step. Our state-of-the-art processing facility adheres to strict quality control measures, ensuring that each product meets the highest standards of freshness and purity.</p>
                <p>Whether you are looking for farm-fresh milk, creamy yogurt, or a range of delectable dairy delights, we have something for everyone in the family. Our diverse product range includes milk, curd, ghee, paneer, and much more.</p>
                <button href='/' className='btn btn-hero' >Register/Login</button>
            </div>
            <img className='landingpageMaineImage' src={main} />
        </section>
    </Wrapper>
}

export default Landing