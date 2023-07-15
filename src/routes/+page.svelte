<script lang="ts">
    import { enhance } from '$app/forms'
    import { page } from '$app/stores'
</script>
<div class="container">
    <h1>My Shipping</h1>
    {#if !$page.data.user }
    <p>Login here</p>
    <p>Register</p>
    {/if}
    {#if $page.data.user }
    {$page.data.user.name}
    {$page.data.user.role}
    <form action="/logout" method="POST" use:enhance>
        <input type="submit" value="Logout">
    </form>
    {/if}
</div>
