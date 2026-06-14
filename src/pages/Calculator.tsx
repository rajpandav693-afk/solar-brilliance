import { useState } from "react";
import { Calculator, Zap, Sun, TrendingUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const SolarCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState<string>("");
  const [connectedLoad, setConnectedLoad] = useState<string>("");
  const [results, setResults] = useState<{
    monthlyUnits: number;
    requiredKW: number;
    panelsRequired: number;
    monthlySaving: number;
    yearlySaving: number;
  } | null>(null);
  const headerAnim = useScrollAnimation();
  const calculateSolar = () => {
    const bill = parseFloat(monthlyBill) || 0;
    const load = parseFloat(connectedLoad) || 0;
    if (bill <= 0) return;
    const monthlyUnits = bill / 7;
    const requiredKW = monthlyUnits / 120;
    const panelSize = 540;
    const panelsRequired = Math.ceil(requiredKW * 1000 / panelSize);
    const monthlySaving = bill;
    const yearlySaving = monthlySaving * 12;
    setResults({
      monthlyUnits: Math.round(monthlyUnits),
      requiredKW: Math.round(requiredKW * 10) / 10,
      panelsRequired,
      monthlySaving: Math.round(monthlySaving),
      yearlySaving: Math.round(yearlySaving)
    });
  };
  const getWhatsAppMessage = () => {
    if (!results) return "";
    return `Hello Agnisun Solar 👋
I calculated my solar requirement on your website.

Details:
• Monthly Bill: ₹${monthlyBill}
• Required Solar Size: ${results.requiredKW} kW
• Panels Required: ${results.panelsRequired}
• Monthly Saving: ₹${results.monthlySaving}
• Yearly Saving: ₹${results.yearlySaving}

Please contact me for a free site survey.`;
  };
  return <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div ref={headerAnim.ref} className={`text-center mb-12 ${headerAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm font-medium text-secondary-foreground mb-4">
              <Calculator className="w-4 h-4" />
              Free Solar Estimation
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">Solar Requirement</span> Calculator
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Calculate your solar system requirements and potential savings based on your monthly electricity bill
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card className="shadow-xl border border-foreground/10">
                <CardHeader>
                  <CardTitle className="text-primary">Enter Your Details</CardTitle>
                  <CardDescription>
                    Fill in your electricity consumption details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyBill">Monthly Electricity Bill (₹)</Label>
                    <Input id="monthlyBill" type="number" placeholder="e.g., 5000" value={monthlyBill} onChange={e => setMonthlyBill(e.target.value)} className="text-lg border-foreground/20 focus:border-primary" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="connectedLoad">Connected Load (Watts) - Optional</Label>
                    <Input id="connectedLoad" type="number" placeholder="e.g., 3000" value={connectedLoad} onChange={e => setConnectedLoad(e.target.value)} className="text-lg border-foreground/20 focus:border-primary" />
                  </div>

                  <Button onClick={calculateSolar} className="w-full shadow-md" size="lg" disabled={!monthlyBill}>
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Solar Requirement
                  </Button>
                </CardContent>
              </Card>

              {/* Results Section */}
              <div className="space-y-6">
                {results ? <>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-secondary hover-lift border border-foreground/10 shadow-sm">
                        <CardContent className="p-6 text-center">
                          <Sun className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-3xl font-bold text-primary">
                            {results.requiredKW} kW
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Required Solar Size
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary hover-lift border border-foreground/10 shadow-sm">
                        <CardContent className="p-6 text-center">
                          <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-3xl font-bold text-primary">
                            {results.panelsRequired}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Solar Panels (540W)
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary hover-lift border border-foreground/10 shadow-sm">
                        <CardContent className="p-6 text-center">
                          <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-3xl font-bold text-primary">
                            ₹{results.monthlySaving.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Monthly Saving
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-primary text-primary-foreground hover-lift shadow-md">
                        <CardContent className="p-6 text-center">
                          <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                          <div className="text-3xl font-bold">
                            ₹{results.yearlySaving.toLocaleString()}
                          </div>
                          <div className="text-sm opacity-90">
                            Yearly Saving
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                      <a href={`https://wa.me/919999999999?text=${encodeURIComponent(getWhatsAppMessage())}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Get Quote on WhatsApp
                      </a>
                    </Button>
                  </> : <Card className="h-full flex items-center justify-center bg-muted/50">
                    <CardContent className="text-center py-12">
                      <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Enter your monthly bill to see your solar requirements
                      </p>
                    </CardContent>
                  </Card>}
              </div>
            </div>

            {/* Info Section */}
            <Card className="mt-12 border border-foreground/10 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-4">How We Calculate:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Monthly Units = Bill ÷ ₹7.5 (avg. per unit rate)</li>
                  <li>• Required Solar Size = Monthly Units ÷ 120 kWh/kW (approx)</li>
                  <li>• Number of Panels = (kW × 1000) ÷ 540W panel size</li>
                  <li>• Savings are estimated based on your current bill</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>;
};
export default SolarCalculator;