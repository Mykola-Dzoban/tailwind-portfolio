import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" alt="About" />
        <article>
          <SectionTitle text="about" />
          <p className="text-slate-600 mt-8 leading-loose">
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
            Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
            Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
            drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
            candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
            muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé
            chocolate cake pastry brownie. Oat cake halvah sweet roll cotton
            candy croissant lollipop. Macaroon tiramisu chocolate bar candy
            candy carrot cake jelly sweet. Gummies croissant macaroon dessert.
            Chocolate cake dragée pie.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
