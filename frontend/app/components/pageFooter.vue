<template>
  <footer
    class="w-full py-8 px-4 mt-auto bg-background dark:bg-background-dark"
  >
    <div class="max-w-[1500px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="flex flex-col space-y-4">
          <h3 class="text-xl font-bold text-text dark:text-text-dark">
            Devfolify
          </h3>
          <p class="text-sm text-text/80 dark:text-text-dark/80 max-w-xs">
            Empowering developers to ideate, create, and share innovative
            projects with the community.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-col space-y-4">
          <h4 class="text-sm font-semibold text-text dark:text-text-dark">
            Quick Links
          </h4>
          <nav class="flex flex-col space-y-2">
            <a
              href="#features"
              class="text-sm text-text/80 dark:text-text-dark/80 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              class="text-sm text-text/80 dark:text-text-dark/80 hover:text-primary transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              class="text-sm text-text/80 dark:text-text-dark/80 hover:text-primary transition-colors"
            >
              Join Waitlist
            </a>
          </nav>
        </div>

        <!-- Social/Contact -->
        <div class="flex flex-col space-y-4">
          <h4 class="text-sm font-semibold text-text dark:text-text-dark">
            Connect
          </h4>
          <div class="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text/80 dark:text-text-dark/80 hover:text-primary transition-colors"
            >
              <Icon name="mdi:github" class="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text/80 dark:text-text-dark/80 hover:text-primary transition-colors"
            >
              <Icon name="mdi:twitter" class="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text/80 dark:text-text-dark/80 hover:text-primary transition-colors"
            >
              <Icon name="mdi:linkedin" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 pt-8 border-t border-text/10 dark:border-text-dark/10">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p class="text-sm text-text/60 dark:text-text-dark/60">
            © {{ new Date().getFullYear() }} Devfolify. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a
              href="#"
              class="text-sm text-text/60 dark:text-text-dark/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              class="text-sm text-text/60 dark:text-text-dark/60 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
