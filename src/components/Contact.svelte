<script>
  export let bg;
  let email = '';
  let name;
  let message;
  async function handleSubmit() {
    let body = {
      email,
      name,
      message,
    };
    let result = await fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(body),
    });
    const registerEmailResponse = await result.json();
    if (registerEmailResponse.status === 200) {
      email = '';
    }
  }
</script>

<section
  class={`h-screen flex flex-col ${
    bg === 'dark'
      ? 'bg-stone-800 text-slate-100'
      : 'bg-slate-100 text-stone-800'
  }`}>
  <h2 class="text-7xl font-title text-center pt-16">Contact Me</h2>
  <p class="mt-5 mx-auto text-lg max-w-md text-center">
    Want to create a website with me? Don't hesitate to send me a message, I
    look forward to working with you!
  </p>
  <form
    on:submit|preventDefault={handleSubmit}
    action="/api/contact"
    method="post"
    class="flex my-auto flex-row flex-wrap justify-evenly text-2xl font-body">
    <div class="w-96 flex flex-col justify-start">
      <div class="mb-10 flex flex-col">
        <label for="name" class="mb-3">Name</label>
        <input
          bind:value={name}
          type="text"
          id="name"
          name="user_name"
          class="shadow-lg h-12" />
      </div>
      <div class="mb-10 flex flex-col">
        <label for="mail" class="mb-3">Mail</label>
        <input
          bind:value={email}
          type="email"
          id="mail"
          name="user_mail"
          class="shadow-lg h-12" />
      </div>
    </div>
    <div class="my-auto w-96">
      <div class="mb-10 flex flex-col">
        <label for="msg" class="mb-3">Message</label>
        <textarea
          bind:value={message}
          id="msg"
          name="user_message"
          rows="5"
          cols="35"
          class="shadow-lg" />
      </div>
      <div class="button w-full">
        <button
          type="submit"
          class="m-auto mr-0 flex bg-stone-700 text-slate-100 px-4 py-2 text-base rounded-md hover:bg-stone-900 hover:text-slate-50 transition-all">
          ✉ SEND</button>
      </div>
    </div>
  </form>
</section>
