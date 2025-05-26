"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";

export default function CaseStudies() {
  return (
    <section className="text-secondary-foreground">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4">Case Studies</Badge>
          <h2 className="section-title">Here are some of our case studies</h2>
          <p className="section-subtitle">
            Discover the achievements we&apos;ve managed to create for our
            clients!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mx-auto">
          {/* Case Study 1 */}
          <Card className="border-0 shadow-none bg-gray-800 p-8">
            <CardContent className="p-0">
              <div className="space-y-6">
                <div className="bg-white/10 p-3 inline-block rounded-lg uppercase text-sm font-medium text-white">
                  CASE STUDY #1
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="https://ext.same-assets.com/452876233/969682437.jpeg"
                    alt="Gossips"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">Gossips</h3>
                    <p className="text-white/80">Drama Channel</p>
                  </div>
                </div>

                <p className="text-white/90">
                  We were able to get this channel from 0 - 4,000 active
                  subscribers in just 2 months!
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-white/80 text-sm font-medium mb-4">
                      Before working with us
                    </h4>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">0</div>
                        <div className="text-white/60 text-sm">views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">0</div>
                        <div className="text-white/60 text-sm">subscribers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">0</div>
                        <div className="text-white/60 text-sm">watch hours</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-white/80 text-sm font-medium mb-4">
                      After working with us
                    </h4>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          1.2M
                        </div>
                        <div className="text-white/60 text-sm">
                          channel views
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          4000
                        </div>
                        <div className="text-white/60 text-sm">active subs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          19k+
                        </div>
                        <div className="text-white/60 text-sm">watch hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 space-y-4 mt-6">
                  <div>
                    <h4 className="text-white text-center mb-3">BEFORE</h4>
                    <Image
                      src="https://ext.same-assets.com/452876233/3996357039.png"
                      alt="Before"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-center mb-3">AFTER</h4>
                    <Image
                      src="https://ext.same-assets.com/452876233/2744925292.png"
                      alt="After"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 2 */}
          <Card className="border-0 shadow-none bg-gray-800 p-8">
            <CardContent className="p-0">
              <div className="space-y-6">
                <div className="bg-white/10 p-3 inline-block rounded-lg uppercase text-sm font-medium text-white">
                  CASE STUDY #2
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="https://ext.same-assets.com/452876233/4219497601.jpeg"
                    alt="Fight Mythos"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Fight Mythos
                    </h3>
                    <p className="text-white/80">Boxing Channel</p>
                  </div>
                </div>

                <p className="text-white/90">
                  We took this pre-monetized channel with only 1k subscribers &
                  scaled it to 280k+ subscribers in just 6 months!
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-white/80 text-sm font-medium mb-4">
                      Before working with us
                    </h4>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">
                          &lt;1k
                        </div>
                        <div className="text-white/60 text-sm">views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">
                          1000
                        </div>
                        <div className="text-white/60 text-sm">subscribers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">
                          4000
                        </div>
                        <div className="text-white/60 text-sm">watch hours</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-white/80 text-sm font-medium mb-4">
                      After working with us
                    </h4>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          170M+
                        </div>
                        <div className="text-white/60 text-sm">
                          channel views
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          280k+
                        </div>
                        <div className="text-white/60 text-sm">active subs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          1.4M+
                        </div>
                        <div className="text-white/60 text-sm">watch hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 space-y-4 mt-6">
                  <div>
                    <h4 className="text-white text-center mb-3">BEFORE</h4>
                    <Image
                      src="https://ext.same-assets.com/452876233/2367482233.png"
                      alt="Before"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-center mb-3">AFTER</h4>
                    <Image
                      src="https://ext.same-assets.com/452876233/2116978300.png"
                      alt="After"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link href="/#call">
            <Button
              className="bg-gray-800 text-secondary hover:bg-gray-800/90 py-10 px-8 text-2xl w-full"
              size="lg"
            >
              Want results like these for your channel?
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
