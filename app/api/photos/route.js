import { NextResponse } from "next/server";
import { getAllPhoto } from "@/lib/photo-data";


export async function GET(){
    const data = await getAllPhoto();
    return NextResponse.json(data);
}