"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { motion, backOut, easeOut } from "motion/react";

export default function CaseStudies() {
  return (
    <motion.section
      className="text-secondary-foreground"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.18 } },
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4">Case Studies</Badge>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            viewport={{ once: true }}
          >
            Here are some of our case studies
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            viewport={{ once: true }}
          >
            Discover the achievements we&apos;ve managed to create for our
            clients!
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-12 mx-auto"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.22 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Case Study 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: backOut },
              },
            }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
            whileTap={{ scale: 0.98 }}
          >
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
                          <div className="text-white/60 text-sm">
                            subscribers
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">0</div>
                          <div className="text-white/60 text-sm">
                            watch hours
                          </div>
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
                          <div className="text-white/60 text-sm">
                            active subs
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            19k+
                          </div>
                          <div className="text-white/60 text-sm">
                            watch hours
                          </div>
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
          </motion.div>

          {/* Case Study 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: backOut },
              },
            }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
            whileTap={{ scale: 0.98 }}
          >
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
                    We took this pre-monetized channel with only 1k subscribers
                    & scaled it to 280k+ subscribers in just 6 months!
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
                          <div className="text-white/60 text-sm">
                            subscribers
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">
                            4000
                          </div>
                          <div className="text-white/60 text-sm">
                            watch hours
                          </div>
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
                          <div className="text-white/60 text-sm">
                            active subs
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            1.4M+
                          </div>
                          <div className="text-white/60 text-sm">
                            watch hours
                          </div>
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
          </motion.div>
        </motion.div>
        <motion.div
          className="text-center my-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
          viewport={{ once: true }}
        >
          <Link href="/#call">
            <Button
              className="bg-gray-800 shadow-[0_6px_0_0_#000000] hover:shadow-[0_0_0_0_#000000] text-secondary hover:bg-black py-10 px-8 text-2xl w-full transition-all duration-700"
              size="lg"
            >
              Want results like these for your channel?
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
