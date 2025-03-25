import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";

export default function VendorReviews() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Customer Reviews</h1>
        <Button variant="outline">Filter Reviews</Button>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Posted 2 days ago</CardDescription>
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
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Pizza</Badge>
                <Badge variant="outline">Service</Badge>
              </div>
              <div>
                <Textarea placeholder="Reply to this review..." className="mb-2" />
                <Button>Send Reply</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <CardTitle>Jane Smith</CardTitle>
                <CardDescription>Posted 5 days ago</CardDescription>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 font-bold">5.0</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The pasta was cooked to perfection! Will definitely come back again.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Pasta</Badge>
                <Badge variant="outline">Food Quality</Badge>
              </div>
              <div>
                <Textarea placeholder="Reply to this review..." className="mb-2" />
                <Button>Send Reply</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}