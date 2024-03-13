import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import PersonComponent from "./person-component"

  
  function CardComponent (){
    return(
    <Card className="w-1/2">
        <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Invite your team members to collaborate.</CardDescription>
        </CardHeader>
        <CardContent>
            <PersonComponent />
        </CardContent>
        
    </Card>
    )
    
  
  }

  export default CardComponent