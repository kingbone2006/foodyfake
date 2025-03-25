import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon, MapPin } from "lucide-react";

export default function Bookmarks() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Bookmarks</h1>

      <Tabs defaultValue="restaurants">
        <TabsList>
          <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
          <TabsTrigger value="dishes">Dishes</TabsTrigger>
        </TabsList>

        <TabsContent value="restaurants">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Tasty Bites</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Food Street</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">4.5</span>
                  <span className="text-muted-foreground">(123 reviews)</span>
                </div>
                <Button variant="outline" className="w-full">View Restaurant</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="dishes">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Margherita Pizza</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">at Tasty Bites</p>
                <div className="flex items-center gap-2 mb-4">
                  <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">4.8</span>
                  <span className="text-muted-foreground">(45 reviews)</span>
                </div>
                <Button variant="outline" className="w-full">View Dish</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}