import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Spinner } from '@/components/ui/spinner'
import { Toaster } from '@/components/ui/sonner'

export default function ComponentsDemo() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <main className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center mt-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white mb-4">
                        Component Library
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A beautiful, premium UI collection of reusable components.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card Component */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 border-b border-blue-100 pb-2">Cards & Layouts</h2>
                        <Card>
                            <CardHeader>
                                <CardTitle>Cloud Migration Service</CardTitle>
                                <CardDescription>Seamless transition to the cloud</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    We help clients deploy and manage cloud environments with confidence, ensuring zero downtime and maximum security.
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">Learn More</Button>
                                <Button>Get Started</Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-blue-700 text-white border-none">
                            <CardHeader>
                                <CardTitle className="text-white">Premium Support</CardTitle>
                                <CardDescription className="text-blue-100">24/7 Priority Access</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-blue-50">
                                    Upgrade your plan to get direct access to our senior cloud architects.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-white text-blue-700 hover:bg-blue-50">Upgrade Now</Button>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Form Components */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 border-b border-blue-100 pb-2">Form Controls</h2>
                        <Card>
                            <CardHeader>
                                <CardTitle>Request a Quote</CardTitle>
                                <CardDescription>Fill out the form below to get an estimate.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Service Type</label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Services</SelectLabel>
                                                <SelectItem value="migration">Cloud Migration</SelectItem>
                                                <SelectItem value="security">Security Audit</SelectItem>
                                                <SelectItem value="devops">DevOps Consulting</SelectItem>
                                                <SelectItem value="support">Managed Support</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Details</label>
                                    <Textarea id="message" placeholder="Tell us about your project requirements..." />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Submit Request</Button>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Buttons & Indicators */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 border-b border-blue-100 pb-2">Actions & Indicators</h2>
                        <Card>
                            <CardHeader>
                                <CardTitle>Button Variants</CardTitle>
                                <CardDescription>Different styles for user actions.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2">
                                        <Button variant="default">Primary</Button>
                                        <Button variant="secondary">Secondary</Button>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="outline">Outline</Button>
                                        <Button variant="ghost">Ghost</Button>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="destructive">Destructive</Button>
                                        <Button variant="link">Link Button</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Spinners</CardTitle>
                                <CardDescription>Loading states.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-around h-24">
                                <Spinner size="sm" />
                                <Spinner size="md" />
                                <Spinner size="lg" />
                                <Spinner size="xl" />
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </main>
            <Toaster />
        </div>
    )
}