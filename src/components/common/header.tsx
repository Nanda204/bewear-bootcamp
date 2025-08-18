"use client";

import { Home, LogInIcon, LogOutIcon, MenuIcon, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";

import { Cart } from "./cart";

export const Header = () => {
  const { data: session } = authClient.useSession();

  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/">
        <Image src="/logo.svg" alt="BEWEAR" width={100} height={26.14} />
      </Link>

      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="px-5">
              {session?.user ? (
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={session?.user?.image as string | undefined}
                      />
                      <AvatarFallback>
                        {session?.user?.name?.split(" ")?.[0]?.[0]}
                        {session?.user?.name?.split(" ")?.[1]?.[0]}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className="font-semibold">{session?.user?.name}</h3>
                      <span className="text-muted-foreground block text-xs">
                        {session?.user?.email}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => authClient.signOut()}
                  >
                    <LogOutIcon />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">Olá. Faça seu login!</h2>
                  <Button size="icon" asChild variant="outline">
                    <Link href="/authentication">
                      <LogInIcon />
                    </Link>
                  </Button>
                </div>
              )}

              <div className="py-6">
                <Separator />
              </div>

              <nav className="mt-0.1 space-y-3">
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <Home className="h-4 w-4" /> Início
                </Link>

                <Link
                  href="/orders"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <Package className="h-4 w-4" /> Meus Pedidos
                </Link>
              </nav>

              <div className="py-6">
                <Separator />
              </div>

              <nav className="space-y-3">
                <Link
                  href="category/camisetas"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <Image
                    src="/camisa.png"
                    alt="Camisetas"
                    width={24}
                    height={24}
                  />
                  Camisetas
                </Link>

                <Link
                  href="/bermuda-shorts"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <Image
                    src="/shorts.png"
                    alt="Bermuda & Shorts"
                    width={24}
                    height={24}
                  />
                  Bermuda & Shorts
                </Link>

                <Link
                  href="category/calcas"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <Image src="/calca.png" alt="Calças" width={24} height={24} />
                  Calças
                </Link>

                <Link
                  href="category/jaquetas-moletons"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <Image
                    src="/casaco.png"
                    alt="Jaquetas & Moletons"
                    width={24}
                    height={24}
                  />
                  Jaquetas & Moletons
                </Link>

                <Link
                  href="category/tenis"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <Image src="/tenis.png" alt="Tênis" width={24} height={24} />
                  Tênis
                </Link>

                <Link
                  href="category/acessorios"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <Image
                    src="/bone.png"
                    alt="Acessórios"
                    width={24}
                    height={24}
                  />
                  Acessórios
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Sacola */}
        <Cart />
      </div>
    </header>
  );
};
