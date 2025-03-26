import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function TourismCard({ place }) {
  const navigate = useNavigate();
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden sm:h-56">
        <img
          src={place.image || "/placeholder.svg"}
          alt={place.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="line-clamp-1 text-xl">{place.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription className="line-clamp-3 text-sm text-muted-foreground">
          {place.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end p-4 pt-0">
        <Button
          variant="outline"
          className="group"
          onClick={() => navigate(`/article/${place.id}`)}
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
