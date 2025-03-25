import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon, ThumbsUp } from "lucide-react";

export default function UserReviews() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Reviews</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Tasty Bites</CardTitle>
                <p className="text-sm text-muted-foreground">Reviewed on Jan 15, 2024</p>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 font-bold">4.5</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Great food and excellent service! The atmosphere was perfect for a family dinner.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ThumbsUp className="h-4 w-4" />
                <span>15 likes</span>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Margherita Pizza at Pizza Palace</CardTitle>
                <p className="text-sm text-muted-foreground">Reviewed on Jan 10, 2024</p>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 font-bold">5.0</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The best pizza I've had in a long time! Perfect crust and fresh ingredients.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ThumbsUp className="h-4 w-4" />
                <span>8 likes</span>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}