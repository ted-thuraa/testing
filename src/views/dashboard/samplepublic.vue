<template>
  <div>
    <div class="relative flex flex-col overflow-x-hidden h-screen">
      <div
        class="relative flex-1 py-2 mb-2 flex overflow-y-hidden overflow-x-hidden"
      >
        <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#595959]">
          <div
            class="w-[200%] -translate-x-1/4 opacity-[0.7] blur-[30px] inline-block bg-transparent"
          >
            <img
              loading="lazy"
              src=""
              alt=""
              class="h-auto w-[100%] block m-auto"
            />
          </div>
          <div
            class="absolute top-0 bottom-0 left-0 right-0"
            style="
              background: linear-gradient(
                to bottom,
                rgba(89, 89, 89, 0.8) 0%,
                rgba(89, 89, 89, 0.298) 33%,
                rgba(15, 15, 15, 1) 100%
              );
            "
          ></div>
        </div>
        <div class="relative flex-1 overflow-y-auto overflow-x-hidden">
          <div class="w-full flex flex-col mb-20">
            <!-- <div
                        class="relative overflow-visible opacity-100 flex items-start flex-none flex-col flex-nowrap gap-[24px] h-min justify-start px-6 pt-6 pb-10 w-full rounded-xl"
                    >
                        <div
                            class="relative flex-none h-[80px] w-[80px] overflow-visible"
                        >
                            <img
                                loading="lazy"
                                src="../assets/images/ted.jpg"
                                alt=""
                                class="h-[80px] w-[80px] rounded-full object-cover"
                            />
                        </div>
                        <div class="relative h-[99px] w-[289px] flex-none">
                            <div
                                class="flex justify-start flex-col outline-none text-white text-[32px] font-bold leading-[120%] tracking-[-1px] xl:text-[44px] xl:tracking-[-2px]"
                            >
                                <div
                                    class="break-words whitespace-break-spaces"
                                >
                                    <p>@tedflux</p>
                                </div>
                            </div>
                            <div
                                class="flex flex-col justify-start h-auto mt-3 text-[#d3d3d3] xl:mt-3 xl:text-xl"
                            >
                                <div
                                    class="break-words whitespace-break-spaces"
                                >
                                    <p>
                                        I solve business problems through
                                        human-centered design, with a focus on
                                        simplicity, sophistication, and
                                        efficiency.
                                    </p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div> -->
            <div
              class="relative block px-2 overflow-visible opacity-100 pt-6 pb-2 w-full rounded-xl"
            >
              <div class="w-full flex items-center justify-end px-4 pb-2">
                <button
                  class="btn btn-square btn-primary btn-sm"
                  aria-label="Share this Indie Page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>

              <div
                class="flex flex-none flex-row flex-nowrap h-min justify-between pl-8 pr-16"
              >
                <div class="relative flex flex-none overflow-visible">
                  <img
                    loading="lazy"
                    src=""
                    alt=""
                    class="h-[100px] w-[100px] rounded-full object-cover"
                  />
                </div>
                <div class="ml-2.5 relative h-auto flex flex-col items-center">
                  <div class="space-y-1 flex-1">
                    <h1 class="font-bold text-[1.5rem]"></h1>
                    <h2 class="">
                      📍<!-- -->
                      <span class="text-base-content/80"></span>
                    </h2>
                    <div>
                      <div class="text-base flex gap-1 items-center">
                        <span class="whitespace-nowrap"
                          ><span>🟩</span><span>🟩</span><span>🟩</span
                          ><span>🟧</span><span>⬜️</span></span
                        >
                        <p class="text-base-content/80 whitespace-nowrap">
                          $5k/mo
                        </p>
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
            <div class="w-full px-6 mb-6 flex items-center">
              <p class=""></p>
            </div>
            <!-- <div
                        class="relative overflow-visible opacity-100 flex items-start flex-none flex-col flex-nowrap gap-[24px] h-min justify-center px-4 pt-6 pb-10 w-full rounded-xl"
                    >
                        <div
                            class="relative flex items-center justify-center flex-none overflow-visible h-auto w-full"
                        >
                            <img
                                loading="lazy"
                                src="../assets/images/ted.jpg"
                                alt=""
                                class="h-[100px] w-[100px] rounded-full object-cover"
                            />
                        </div>
                        <div class="relative flex-none">
                            <div
                                class="flex items-center flex-col outline-none text-center text-white text-[32px] font-bold leading-[120%] tracking-[-1px] xl:text-[44px] xl:tracking-[-2px]"
                            >
                                <div
                                    class="break-words whitespace-break-spaces"
                                >
                                    <p>@tedflux</p>
                                </div>
                            </div>
                            <div
                                class="flex items-center h-auto mt-3 text-center text-[#dbdbdb] xl:mt-3 xl:text-xl"
                            >
                                <div
                                    class="break-words whitespace-break-spaces"
                                >
                                    <p>
                                        I solve business problems through
                                        human-centered design, with a focus on
                                        simplicity, sophistication, and
                                        efficiency.
                                    </p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div> -->
            <div class="flex flex-col relative h-min px-4 pb-10 w-full">
              <div class="m-0 p-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
