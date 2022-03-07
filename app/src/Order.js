import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";


const Order = (props) => {

	return (
		<>
			<MenuBar articles={props.cart} />

			<p>Votre commande a bien été prise en compte.</p>

			<Footer />
		</>
	);
}

export default Order;