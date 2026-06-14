import { Target, Eye, Award, Users, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
const About = () => {
  const headerAnim = useScrollAnimation();
  const missionAnim = useScrollAnimation();
  const valuesAnim = useScrollAnimation();
  const values = [{
    icon: CheckCircle,
    title: "Quality",
    description: "Premium components and expert installation"
  }, {
    icon: Users,
    title: "Trust",
    description: "Transparent pricing and honest advice"
  }, {
    icon: Award,
    title: "Excellence",
    description: "Committed to customer satisfaction"
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent">
        <div className="container mx-auto px-4">
          <div ref={headerAnim.ref} className={`max-w-3xl mx-auto text-center ${headerAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-primary">Agnisun Solar</span>
            </h1>
            <p className="text-lg text-muted-foreground">Your trusted partner for solar energy solutions in Gujarat. With over 7 years of experience and 1000+ successful installations, we're committed to making solar energy accessible and affordable for everyone.</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                <span className="text-primary">Our Story</span>
              </h2>
              <p className="text-muted-foreground">
                Agnisun Solar was founded with a simple mission: to help Gujarat transition to
                clean, renewable energy. We believe every home and business deserves access to
                affordable solar power.
              </p>
              <p className="text-muted-foreground">
                Starting from Surat, we've grown to serve multiple cities across Gujarat, building
                a reputation for quality installations and excellent customer service. Our team of
                experienced professionals ensures every project is completed to the highest standards.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center p-5 bg-secondary rounded-xl border border-foreground/10 shadow-sm">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Installations</div>
                </div>
                <div className="text-center p-5 bg-secondary rounded-xl border border-foreground/10 shadow-sm">
                  <div className="text-3xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={project1} alt="Agnisun Solar Project" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              <img src={project2} alt="Agnisun Solar Project" className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" />
              <img src={project3} alt="Agnisun Solar Project" className="w-full h-48 col-span-2 shadow-md rounded-sm object-scale-down" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div ref={missionAnim.ref} className={`grid md:grid-cols-2 gap-8 ${missionAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-foreground/10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide affordable and reliable solar energy solutions that help families and
                businesses reduce their electricity costs while contributing to a sustainable future.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-foreground/10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To make Gujarat energy independent through solar power, one rooftop at a time.
                We envision a future where every home and business is powered by clean,
                renewable solar energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div ref={valuesAnim.ref} className={`text-center mb-12 ${valuesAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-lg hover-lift border border-foreground/10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;