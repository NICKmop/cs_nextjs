'use client';
import { useEffect } from 'react';
import { NextRequest, NextResponse } from "next/server";
import { useRouter } from 'next/navigation';

export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', request.nextUrl.pathname);
  
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      }
    });
}

export function getMiddlePath() {
    const router = useRouter();

    useEffect(() => storePathValues, []);

    function storePathValues() {
        const storage = globalThis?.sessionStorage;
        if (!storage) return;
        // Set the previous path as the value of the current path.
        const prevPath = storage.getItem("currentPath");

        storage.setItem("prevPath", prevPath != null ? prevPath : "");

        // Set the current path value by looking at the browser's location object.
        storage.setItem("currentPath", globalThis.location.pathname);
    }
}