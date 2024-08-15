"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"


import { FileUpload } from "@/components/ui/file-upload";
 

import { Input } from "@/components/ui/input"


export default function InputDemo() {
  const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
      setFiles(files);
      console.log(files);
    };
  return (
    <div>
        
        <div className="p-5">
          <Label htmlFor="picture">School Name</Label>
          <Input  type="text" placeholder="School Name" />
          <br />
          <center><Button variant="outline">Add</Button></center> 

        </div>
        <div className="p-5">
          <Label htmlFor="picture">Contact</Label>
          <Input  type="text" placeholder="Contact" />
          <br />
          <center><Button variant="outline">Add</Button></center> 
          <br />
          <Label htmlFor="picture">Email</Label>
          <Input  type="email" placeholder="Contact" />
          <br />
          <center><Button variant="outline">Add</Button></center> 

        </div>
        <div className="p-5">
          <Label htmlFor="picture">Facilities</Label>
          <Input  type="text" placeholder="Facilities" />
          <br />
          <center><Button variant="outline">Add</Button></center> 

        </div>
        <div className="p-5">
          <Label htmlFor="picture">Place</Label>
          <Input  type="text" placeholder="Place" />
          <br />
          <center><Button variant="outline">Add</Button></center> 

        </div>
        
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            
            <FileUpload onChange={handleFileUpload}  />
            
            

        </div>
        <br />
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            
            <FileUpload onChange={handleFileUpload}  />
            

        </div>
    </div>
    
  
  )
}
