

export type Role = keyof typeof Roles;
type Permission = (typeof Roles)[Role][number];

const Roles = {
  admin: [
    "create:comments",
    "add:owncomments",
    "absence:comments",
    "read:comments",
    "update:comments",
    "delete:owncomments",
  ],
  student: ["read:comments", "extraField:comments", "notification:owncomments","profile:comments"],
  teacher: [
    "add:comments",
    "absence:comments",
    "absenceadd:comments",
    "read:comments",
    "delete:comments",
    "profile:comments",
  ],
} as const;

export function hasPermission(role: Role, permission: Permission) {
  if (!Roles[role]) {
    throw new Error(`Role ${role} not found`);
  }
  return (Roles[role] as readonly Permission[]).includes(permission);
}
