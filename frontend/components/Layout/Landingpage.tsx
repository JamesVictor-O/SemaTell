import React from "react";
import { Button } from "../ui/button";

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full">
        <div
          className="flex min-h-[80vh] flex-col gap-8 bg-cover bg-center bg-no-repeat items-center justify-center p-6 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 17, 34, 0.6) 0%, rgba(16, 17, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRPukqcLtyiukcBjhV6suggR72UOV0-M2nMMCEtpLC1CSTeiNVJzUSje13DmlPn7F9InOvnq0CYUEVkmg3gHBA8Jqutz-C_ygVfBIJ7pdhZtBZmrNxor-mJJSf3OwlINjKSD8LD0WnKbPJya8P0dX5m0GkscPxWhLXzTdCrkqRlvcL_tCxmfCk02ztJmXeMWuQXM5J1nZWrrsFUlS1Ph7i8QfjnehxmQgX9VJ5q3VZESzpcTieOQ9TBotqBixicmZsc1gpwG8o_vM")`,
          }}
        >
          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl md:text-7xl">
              YOUR CULTURAL KNOWLEDGE. AGGREGATED. REWARDED.
            </h1>
            <h2 className="text-gray-300 text-base md:text-xl font-normal leading-normal max-w-2xl mx-auto">
              Predict outcomes in African entertainment, compete in global
              leagues, and earn status by mastering the market for truth.
            </h2>
          </div>

          <div className="w-full max-w-sm mt-4">
            <Button size="lg" className="w-full h-14 text-lg" onClick={onStart}>
              START PREDICTING & EARN
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Bar Section */}
      <div className="py-12 px-4 bg-background-dark border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <div className="flex flex-col gap-2 rounded-xl p-8 border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
              <p className="text-gray-400 text-lg font-medium">
                Total Predictions
              </p>
              <p className="text-white text-4xl md:text-5xl font-bold">1.2M+</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-8 border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
              <p className="text-gray-400 text-lg font-medium">
                Active Players
              </p>
              <p className="text-white text-4xl md:text-5xl font-bold">50K+</p>
            </div>
          </div>

          {/* MetaText */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm font-medium tracking-widest uppercase mb-8">
              Featured In
            </p>

            {/* Logos */}
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Using the specific URLs from the user input for authenticity to the design */}
              <div
                className="w-24 h-10 bg-center bg-no-repeat bg-contain"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUMDUoJdhs4ZMhRREVkLu_j1lJdOI5F_v4JTgpHbHp8ohe6X9xS_-bsttXZoOBatL5_wHhFReI6qvc3ZZ2NA2IwCWeNvphCGA38w053lfiav3UBnnZPqmRkVz1fiSbYP792kNw8wf0AFB8KhDcmrzd056WhwSpEVb3HYQnE0Vmma0HULNU9qGjTmCHqwhY6Fk0kGbxs7QQvfXAFaluDodagzVvxJwNLtKj_puehqJrSCMbndGtEF_gqaj31VA9YP1L11jDdqdkG6U')",
                  filter: "invert(1)",
                }}
              ></div>
              <div
                className="w-24 h-10 bg-center bg-no-repeat bg-contain"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDV2EhJ1J_8Drf-uQZasC22tyeztrn5228i13aQ-QlCgHbo79_V1XmYIkWqpyLbCMxsrjz29VFvdDDWVuBE4w7AGH3Zc9numAxQsYsfT218LsdeSySsja4_SsjMjugJNl2E1MDV0t0XuGTfUU6ScNKz-HlPU5eUw4u2vLXwOVoKS6JI1YpQVpxrQxS4rBvu_6H7LLjOQYCYZn_bhfQb-85bn6iSIRHvRwcO8IqjifuRwP9A3hU5CZ88lfOSRr1dF7o2m0-MS_Y2I7M')",
                  filter: "invert(1)",
                }}
              ></div>
              <div
                className="w-24 h-10 bg-center bg-no-repeat bg-contain"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALvfSy0sS5rYh2PRGtV1UiCQfk49JO5IXgq-7h8kHv2djvf31_8GPMqxFb0OyEG6MmJOFqSN6TukBgX2NJzr14M2suiKBKd8z0jPoqRJykgwV4oQF5djqbw6KZdXatapGSJV3GVoE-F6802n3zpPCd0Feh_I3TpGhIbWT0HV_SDaXLh08SOW7-cdhZzg3dIJrPTDUS-6cwsiyA0FX_gxsrwZWThDmVzmVvRh-2KD8sAoukKvyI_dpS-FWCwtyaGrYZEjkjddRrYTc')",
                  filter: "invert(1)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
