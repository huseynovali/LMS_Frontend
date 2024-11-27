export type Role = keyof typeof Roles;
type Permission = (typeof Roles)[Role][number];

const Roles = {
  admin: [
    "create:comments",
    "add:owncomments",
    "absence:comments",
    
    "read:comments",
    "update:comments",
    "delete:comments",
  ],
  student: ["read:comments","extraField:comments"],
  teacher: [
    "add:comments",
    "absence:comments",
    "absenceadd:comments",
    "read:comments",
    "delete:comments",
  ],
} as const;

export function hasPermission(
  role: Role,
  permission: Permission
) {
  return (Roles[role] as readonly Permission[]).includes(permission);
}
