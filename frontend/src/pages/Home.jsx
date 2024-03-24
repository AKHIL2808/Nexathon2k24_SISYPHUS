import { useState } from "react";
import Appbar from "../components/Appbar";

export default function Home() {

    return (
        <div className="w-screen animated-background h-screen bg-gradient-to-br from-black via-black to-pink-500 ">
            <div>
                <Appbar isHome={true} />
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[2px] w-full"></div>
            <div class="flex  justify-center gap-2">

                <div class="flex-1 mr-4 gap-2">
                    <div class="grid  gap-4">

                        <div class="bg-white rounded-lg shadow-lg p-4">
                            <h2 class="text-xl font-bold mb-2">Card 1</h2>
                            <p>Content for card 1.</p>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-4">
                            <h2 class="text-xl font-bold mb-2">Card 2</h2>
                            <p>Content for card 2.</p>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-4">
                            <h2 class="text-xl font-bold mb-2">Card 3</h2>
                            <p>Content for card 3.</p>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-4">
                            <h2 class="text-xl font-bold mb-2">Card 4</h2>
                            <p>Content for card 4.</p>
                        </div>
                    </div>
                </div>

                <div class="flex-1">
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h2 class="text-2xl font-bold mb-4">Big Card Box</h2>
                        <p>This is the content for the big card box.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}