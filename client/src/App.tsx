import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Evans from "@/pages/evans";
import CreativeBuilder from "@/pages/creative-builder";
import Poet from "@/pages/poet";
import DesignThinker from "@/pages/design-thinker";
import Developer from "@/pages/developer";
import MotionCreator from "@/pages/motion-creator";
import Collaborator from "@/pages/collaborator";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/evans" component={Evans} />
      <Route path="/creative-builder" component={CreativeBuilder} />
      <Route path="/poet" component={Poet} />
      <Route path="/design-thinker" component={DesignThinker} />
      <Route path="/developer" component={Developer} />
      <Route path="/motion-creator" component={MotionCreator} />
      <Route path="/collaborator" component={Collaborator} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
