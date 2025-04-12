
# Sử dụng base image Node.js (chọn phiên bản phù hợp, ví dụ LTS)
FROM node:18-alpine As builder

# Cài đặt pnpm
RUN npm install -g pnpm

# Tạo thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Cài đặt dependencies (sử dụng --frozen-lockfile để đảm bảo cài đúng version)
RUN pnpm install --frozen-lockfile

# Sao chép toàn bộ mã nguồn dự án vào thư mục làm việc
COPY . .

# (Tuỳ chọn) Nếu dự án Node.js cần build (ví dụ TypeScript), thêm lệnh build ở đây
# RUN pnpm build

# --- Giai đoạn chạy ---
# Có thể dùng lại image builder hoặc image node nhỏ hơn nếu không cần build tools
FROM node:18-alpine

WORKDIR /usr/src/app

# Cài đặt pnpm (nếu cần chạy bằng pnpm)
RUN npm install -g pnpm

# Sao chép dependencies đã cài và mã nguồn từ giai đoạn builder
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app ./

# Sao chép thư mục build nếu có (thay 'dist' bằng tên thư mục build thực tế nếu có)
# COPY --from=builder /usr/src/app/dist ./dist

# Mở cổng mà ứng dụng Node.js lắng nghe (thay 3000 nếu khác)
EXPOSE 3000

# Lệnh để khởi động ứng dụng (kiểm tra script "start" trong package.json)
CMD [ "pnpm", "dev" ]
# Hoặc nếu chạy file trực tiếp: CMD [ "node", "dist/server.js" ] hoặc CMD [ "node", "src/index.js" ]