import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ThemeToggle } from "@/components/theme-toggle"
import CardComponent from "@/components/card-component"

const Page = () => {
  
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="absolute top-3 right-3">
      <ThemeToggle  />
      </div>
      
        <CardComponent />
      
      
    
    </div>
  )
}

export default Page