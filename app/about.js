import { Link } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text } from "react-native";

const home = require('../icons/home.png')
export default function About(){
  return (
    <ScrollView style={styles.contentpage}>
      <Text style={styles.titleabout}>Sobre la aplicación</Text>
      <Text style={styles.textabout}>
        CatTip es una aplicación innovadora pensada especialmente para amantes de los gatos. Nuestra plataforma ofrece una experiencia de compra especializada, donde podrás encontrar una amplia variedad de productos para el bienestar de tu felino, incluyendo muebles, juguetes, artículos de higiene y ropa.
        Diseñada para brindar comodidad y accesibilidad, CatTip está disponible tanto en versión móvil como web, permitiéndote explorar y comprar desde donde te sientas más cómodo.
        Ya seas un nuevo dueño o un cat lover de toda la vida, en CatTip encontrarás todo lo que necesitas para consentir a tu gato, con productos cuidadosamente seleccionados para cubrir todas sus necesidades.

        CatTip es una aplicación de compras para el uso cuidado o comodidad para los felinos, que cuenta con variedades de muebles, juguetes e higiene, brindamos accesibilidad para plataformas como pagina web o App móvil.
        Contamos permisos para vender porductos otorgados por Amazon en nuestra app, asimismo nuestros productos derivan el precio por los eventos estacionales (Semana Santa, Acción de Gracias, Navidad, Año Nuevo, Black Friday, Día de la Madre, Amazon Prime Day, Año Nuevo lunar).
      </Text>
      <Text style={styles.titleabout}>Funcionalidades en compras y usuarios</Text>
      <Text style={styles.textabout}>
        En CatTip, los usuarios pueden crear su cuenta para guardar productos favoritos, gestionar pedidos y personalizar su experiencia.
        Al igual que en Amazon, la app cuenta con un carrito de compras dinámico, donde puedes añadir o quitar productos, ver el total actualizado y proceder al pago de forma segura. Todo pensado para una experiencia de compra rápida y sencilla, ya sea desde la app o la web.
        Pantallas clave que podrías mostrar:
        Pantalla de inicio con categorías (muebles, juguetes, etc.)
        Vista de detalle del producto con botón "Agregar al carrito"
        Pantalla del carrito de compras con resumen de productos, cantidades, precios y botón de "Pagar"
        Página de registro/inicio de sesión para gestionar la cuenta
        Sección de pedidos previos / historial de compras
      </Text>
      <Text style={styles.titleabout}>Cambios por eventos estacionales</Text>
      <Text style={styles.textabout}>
        En CatTip, adaptamos nuestra oferta de productos a las necesidades de cada temporada.
        Por ejemplo, durante el invierno promovemos ropa abrigadora y camas térmicas, mientras que en verano destacamos productos de hidratación y juguetes refrescantes. También lanzamos promociones especiales en fechas clave como Navidad, San Valentín o Día del Gato.
        Las ventas en CatTip están estratégicamente alineadas con eventos estacionales y fechas clave para maximizar la conversión.
        Nuestra plataforma adapta el catálogo, la promoción de productos y las campañas de marketing en función de temporadas como invierno/verano o celebraciones relevantes (Navidad, Halloween, Día del Animal, etc.), lo que genera un impulso natural en la demanda.
      </Text>
      <Link asChild href="/" style={styles.contentreturn}>
        <Pressable>
          
          <Image source={home} style={styles.iconos}/>
          <Text style={styles.returnpage}>Volver</Text>
        </Pressable>
      </Link>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titleabout: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  textabout:{
    fontFamily: 'cursive',
    fontSize: 16,
  },
  contentreturn:{
    flex:1,
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    padding: 5,
    margin: 15,
    backgroundColor: '#ffa500',
  },
  contentpage:{
    padding:9,
  },
  returnpage:{
    fontSize: 16,
    color: "white",
  },
  iconos: {
    width: 20,
    height: 20,
    marginHorizontal: 5
  }
})