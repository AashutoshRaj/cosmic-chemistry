export default function ProfilePage() {
  return (
    <section className="space-y-6">
      <header className="border-b border-border pb-4">
        <h1 className="text-2xl font-semibold text-balance">Profile</h1>
        <p className="text-sm text-muted-foreground">Manage your personal information and preferences.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-sm text-muted-foreground">Name</div>
          <div className="mt-2 text-foreground">Jane Doe</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-sm text-muted-foreground">Email</div>
          <div className="mt-2 text-foreground">jane.doe@example.com</div>
        </div>
      </div>
    </section>
  )
}
